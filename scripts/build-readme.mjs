#!/usr/bin/env node
/**
 * Regenerate the projects table from the live repository list.
 *
 * The table is the part of a profile that goes stale first, because it is the part you have
 * to remember to edit. Generating it from the API means it cannot disagree with reality.
 *
 * Only the block between the markers is rewritten; everything hand-written survives.
 */
import { readFileSync, writeFileSync } from "node:fs";

const USER = process.env.GH_USER ?? "rlawoals0529";
// Keep these repositories public, but omit them from the profile's project table.
const HIDDEN_PROJECTS = new Set(["streaming-markdown"]);
const START = "<!-- projects:start -->";
const END = "<!-- projects:end -->";

const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`, {
  headers: {
    accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  },
});
if (!res.ok) {
  // Fail loudly. A generator that writes an empty table on a 403 silently deletes the
  // section it exists to maintain.
  console.error(`GitHub API returned ${res.status}`);
  process.exit(1);
}

const repos = (await res.json())
  .filter((r) => !r.fork && !r.archived && r.name !== USER && r.description)
  .filter((r) => !HIDDEN_PROJECTS.has(r.name.toLowerCase()))
  .sort((a, b) => b.stargazers_count - a.stargazers_count || Date.parse(b.pushed_at) - Date.parse(a.pushed_at));

const readmeBefore = readFileSync("README.md", "utf8");
const seededRows = readmeBefore.split("\n").filter((line) => {
  const match = line.match(/^\| \*\*\[([^\]]+)\]/);
  return match && !HIDDEN_PROJECTS.has(match[1].toLowerCase());
}).length;

/**
 * Nothing public yet is a fact, not a fault.
 *
 * This used to exit 1 here, which was the right instinct applied to the wrong case: a 403 is
 * something broken and deserves a red run, while "none of them are public yet" is the
 * expected state of a profile whose repositories are still private. Reporting it as a failure
 * made this workflow permanently red, and a check that is always red is one nobody reads,
 * which is the same argument the Pages workflows here make for skipping while private.
 */
if (repos.length === 0) {
  console.log("Nothing public yet, so the hand-written table stands. Not an error.");
  process.exit(0);
}

/**
 * And it must not shrink the page on the way through.
 *
 * The table is hand-seeded until the repositories are public, and the handover is gradual:
 * with one repository public and eight seeded rows, a generator that simply wrote the truth
 * would replace the landing page with a single line. Each row would be correct and the page
 * would be worse.
 *
 * So it refuses to write a table shorter than the one already there, prints what it would
 * have written, and exits cleanly. Once enough is public that the generated table is the
 * longer one, it takes over on its own with no flag to remember.
 */
if (repos.length < seededRows) {
  console.log(
    `${repos.length} public repositories against ${seededRows} rows already in the table, so ` +
      "the hand-written one stands. This takes over when the generated table is the longer one."
  );
  console.log("It would have written:");
  for (const r of repos) console.log(`  ${r.name}`);
  process.exit(0);
}

const rows = repos
  .map((r) => {
    const lang = r.language ? ` \`${r.language}\`` : "";
    const stars = r.stargazers_count > 0 ? ` · ★ ${r.stargazers_count}` : "";
    return `| **[${r.name}](${r.html_url})**${lang}${stars} | ${r.description} |`;
  })
  .join("\n");

const table = `${START}\n\n| Project | What it is |\n| --- | --- |\n${rows}\n\n<sub>Generated from the API. Last refreshed ${new Date().toISOString().slice(0, 10)}.</sub>\n\n${END}`;

// The self-audit. This page's whole thesis is that a claim is not evidence, so it reports
// what is actually true of these repositories rather than asserting anything about them.
const audited = repos.length;
const described = repos.filter((r) => r.description).length;
const licensed = repos.filter((r) => r.license).length;

const AUDIT_START = "<!-- audit:start -->";
const AUDIT_END = "<!-- audit:end -->";
const audit = [
  AUDIT_START,
  "",
  "```",
  `listed repositories   ${audited}`,
  `with a description    ${described}/${audited}`,
  `with a licence        ${licensed}/${audited}`,
  `checked              ${new Date().toISOString().slice(0, 10)}`,
  "```",
  "",
  AUDIT_END,
].join("\n");

/*
 * The count in the opening line, derived rather than typed.
 *
 * That line said "eight running in your browser" while fifteen of them were. It went stale
 * for the reason the table used to: it is a fact about the repositories written by hand, in
 * prose, outside the markers, so nothing could notice it drifting. A repository with a
 * homepage set is one with something a reader can open - the same test the portfolio page
 * uses - so the number is a count, not a memory.
 */
const live = repos.filter((r) => r.homepage).length;

const readme = readmeBefore;
if (!readme.includes(START) || !readme.includes(END)) {
  console.error("Markers missing from README.md");
  process.exit(1);
}
let next = readme.replace(new RegExp(`${START}[\\s\\S]*?${END}`), table);
next = next.replace(
  /— all of it in one place, [a-z0-9]+ running in your browser/,
  `— all of it in one place, ${live} running in your browser`,
);
if (next.includes(AUDIT_START) && next.includes(AUDIT_END)) {
  next = next.replace(new RegExp(`${AUDIT_START}[\\s\\S]*?${AUDIT_END}`), audit);
}
writeFileSync("README.md", next);
console.log(`Wrote ${repos.length} project rows, ${live} of them with something to open.`);

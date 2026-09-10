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
  .sort((a, b) => b.stargazers_count - a.stargazers_count || Date.parse(b.pushed_at) - Date.parse(a.pushed_at));

if (repos.length === 0) {
  console.error("No described public repositories found; leaving the table alone.");
  process.exit(1);
}

const rows = repos
  .map((r) => {
    const lang = r.language ? ` \`${r.language}\`` : "";
    const stars = r.stargazers_count > 0 ? ` · ★ ${r.stargazers_count}` : "";
    return `| **[${r.name}](${r.html_url})**${lang}${stars} | ${r.description} |`;
  })
  .join("\n");

const table = `${START}\n\n| Project | What it is |\n| --- | --- |\n${rows}\n\n<sub>Generated from the API. Last refreshed ${new Date().toISOString().slice(0, 10)}.</sub>\n\n${END}`;

const readme = readFileSync("README.md", "utf8");
if (!readme.includes(START) || !readme.includes(END)) {
  console.error("Markers missing from README.md");
  process.exit(1);
}
const next = readme.replace(new RegExp(`${START}[\\s\\S]*?${END}`), table);
writeFileSync("README.md", next);
console.log(`Wrote ${repos.length} project rows.`);

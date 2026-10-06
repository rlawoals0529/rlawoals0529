<img src="assets/header.svg" alt="rlawoals0529 — product-minded engineer" width="100%">

### → **[rlawoals0529.github.io](https://rlawoals0529.github.io)** — all of it in one place, 18 running in your browser

**TypeScript · React · Python · SQL · Cloudflare Workers**

I build browser tools, data products, gaming projects, and interfaces I wish already existed.
The part I care about most is where **product decisions, evidence, and implementation have to agree**.

Three things I keep coming back to:

- **A claim is not evidence.** Most of my tooling exists because something reported green
  while guarding nothing.
- **Unknown is never zero.** A fabricated `0%` is indistinguishable from an idle machine,
  and it is the number a person acts on.
- **Make the invariant mechanical.** A rule nobody can forget beats a rule everybody agrees
  with.

### Four places I'd start

**[Ariadne](https://github.com/rlawoals0529/Ariadne)** is an evidence-aware search interface
that keeps verified results separate from uncertain matches instead of pretending every hit
means the same thing.

**[shelfwear](https://shelfwear.rlawoals0529.workers.dev)** turns a Steam library into something
you can actually read and share, with whole-library browsing, top-nine cards, comparisons,
custom shelves, achievements, and recent activity. Local-file parsing stays in the browser.

**[FantasyStats](https://fantasystats.rlawoals0529.workers.dev)** tells you the odds rather than
a score, because a projection does not beat a season average and the page says so in its own
headline. Four seasons, 24,616 player-weeks: the typical weekly error is 6.2 points against a
mean of seven. So every player is a distribution rather than a number, nothing is ranked that
cannot be told apart, and the spike probability is the shaded area rather than a figure printed
beside it.

**[sidereal](https://sidereal.rlawoals0529.workers.dev)** is a night sky you can leave open and
look around, shared with whoever else has it open. Every light in it traces to a live
measurement: Wikipedia edits as meteors, USGS earthquakes as ground pulses, the ISS on its real
track, the NOAA aurora forecast, and 8,920 Hipparcos stars behind them. One Durable Object on the
edge holds the room, so it opens with no cold start. A test fails the build if anything is drawn
that no measurement is behind.

### What I have built

<!-- projects:start -->

| Project | What it is |
| --- | --- |
| **[rlawoals0529.github.io](https://github.com/rlawoals0529/rlawoals0529.github.io)** `CSS` | Everything I have built, in one place |
| **[shelfwear](https://github.com/rlawoals0529/shelfwear)** `TypeScript` | Steam library analysis with local-first parsing, whole-shelf browsing, shareable cards, and friend comparisons. |
| **[agent-skills](https://github.com/rlawoals0529/agent-skills)** `JavaScript` | Skills for coding agents, built from real failures |
| **[tokenview](https://github.com/rlawoals0529/tokenview)** `TypeScript` | Tokenizer and embedding map for language models |
| **[skill-radar](https://github.com/rlawoals0529/skill-radar)** `TypeScript` | Which agent skill actually fires, and why |
| **[Ariadne](https://github.com/rlawoals0529/Ariadne)** `TypeScript` | Evidence-aware search that keeps verified results, plausible pages, and genuine uncertainty separate. |
| **[hikari](https://github.com/rlawoals0529/hikari)** `JavaScript` | Desktop widgets in HTML, CSS and JavaScript |
| **[ev-purchase-prediction](https://github.com/rlawoals0529/ev-purchase-prediction)** `Python` | EV purchase prediction, with each model change compared on aligned validation before it survives. |
| **[discern](https://github.com/rlawoals0529/discern)** `Python` | Eval harness that knows when a difference is noise |
| **[depgraph](https://github.com/rlawoals0529/depgraph)** `TypeScript` | The true install cost of an npm dependency |
| **[gemma-4-developer-agent](https://github.com/rlawoals0529/gemma-4-developer-agent)** `Python` | A coding-agent competition entry where prompt and workflow changes have to earn their place on the benchmark. |
| **[FantasyStats](https://github.com/rlawoals0529/FantasyStats)** `TypeScript` | Fantasy football as probabilities and distributions, benchmarked against what actually happened. |
| **[sidereal](https://github.com/rlawoals0529/sidereal)** `TypeScript` | A shared night sky built from live measured events and real cataloged stars. |
| **[pc-audit](https://github.com/rlawoals0529/pc-audit)** `TypeScript` | A Windows audit tool that turns machine data into actionable checks without inventing measurements. |
| **[secondread](https://github.com/rlawoals0529/secondread)** `TypeScript` | Paste code, find out what a reviewer would ask |
| **[notepad](https://github.com/rlawoals0529/notepad)** `TypeScript` | Type maths in prose, answers in the margin |
| **[pane](https://github.com/rlawoals0529/pane)** `JavaScript` | Script a Chrome tab over the DevTools Protocol |
| **[decoder](https://github.com/rlawoals0529/decoder)** `TypeScript` | Paste anything, find out what it is |
| **[yozora](https://github.com/rlawoals0529/yozora)** `CSS` | Fifteen nocturnal colour themes for VS Code and terminals |
| **[neon-bar](https://github.com/rlawoals0529/neon-bar)** `TypeScript` | A themeable Zebar status bar for Windows |
| **[skill-lint](https://github.com/rlawoals0529/skill-lint)** `TypeScript` | Linter for agent SKILL.md files |

<sub>Generated from the API. Last refreshed 2026-10-06.</sub>

<!-- projects:end -->

### This page checks itself

The rule above says a claim is not evidence, so this page does not claim anything about
these repositories. It counts them.

<!-- audit:start -->

```
listed repositories   21
with a description    21/21
with a licence        17/21
checked              2026-10-06
```

<!-- audit:end -->

---

<details>
<summary><b>How this page maintains itself</b></summary>

<br>

The table above is generated from the GitHub API by
[`scripts/build-readme.mjs`](scripts/build-readme.mjs), on a schedule and on every push.
Only the block between two markers is rewritten, so everything hand-written survives.

It **fails loudly** rather than writing an empty table on a bad response. A generator that
degrades quietly deletes the section it exists to maintain, and you find out weeks later.

The header is a committed SVG rather than a third-party image service, and there are no
badge images. Nothing on this page is fetched from anywhere at render time, nobody is
tracked, and it works offline.

That is also why there is no stats card or streak counter: both are someone else's server
rendering a number about you, and neither is a thing you built.

</details>

<img src="assets/header.svg" alt="James Kim — full-stack and AI product engineer" width="100%">

**TypeScript · React · Next.js · GraphQL · Python · FastAPI · PostgreSQL**

I work mostly on frontend product engineering, in React and TypeScript, with the backend and
AI services behind it. Lately most of what I build is either **for** agents or **run by**
them.

Three things I keep coming back to:

- **A claim is not evidence.** Most of my tooling exists because something reported green
  while guarding nothing.
- **Unknown is never zero.** A fabricated `0%` is indistinguishable from an idle machine,
  and it is the number a person acts on.
- **Make the invariant mechanical.** A rule nobody can forget beats a rule everybody agrees
  with.

### What I have built

<!-- projects:start -->

| Project | What it is |
| --- | --- |
| **[skill-lint](https://github.com/rlawoals0529/skill-lint)** `TypeScript` | Lint agent SKILL.md files for broken references, colliding triggers and context bloat. |
| **[agent-skills](https://github.com/rlawoals0529/agent-skills)** | Skills for coding agents, each built because a specific failure kept happening. |
| **[hikari](https://github.com/rlawoals0529/hikari)** `JavaScript` | Desktop widgets in HTML and JavaScript. Transparent, always on top, no window manager required. |
| **[streaming-markdown](https://github.com/rlawoals0529/streaming-markdown)** `TypeScript` | Trim a streamed markdown frame back to the longest valid prefix, so an LLM response renders without flickering. |
| **[nexus](https://github.com/rlawoals0529/nexus)** `JavaScript` | A VS Code board showing which agent session is blocked and needs you. |
| **[insight](https://github.com/rlawoals0529/insight)** `PHP` | Turns a CSV upload into an interactive dashboard, with in-browser Python and AI-generated insights. |
| **[neon-bar](https://github.com/rlawoals0529/neon-bar)** `CSS` | A themeable Zebar status bar for Windows, previewable in a browser. |
| **[universal-file-sharing](https://github.com/rlawoals0529/universal-file-sharing)** `Java` | Send files between machines on a network without either knowing the other's IP address. |

<sub>Seeded by hand until these are public; the workflow takes over from there.</sub>

<!-- projects:end -->

### This page checks itself

The rule above says a claim is not evidence, so this page does not claim anything about
these repositories. It counts them.

<!-- audit:start -->
```
public repositories   pending first run
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

# Resume here

Read this first. The prior Cursor chat died when the workspace folder
was renamed. Product is **Smell Check**. npm **`smellcheck`**. Site
**smellcheck.dev**. Spray is still the action verb.

Delete this file when the list below is done.

## Where you are

Commit `36dbf35` (`Rename aiBreze to Smell Check.`) is on `main`. 44
files. Tests: 30 pass. Pushed to **`backup`** only
(`D:/git-mirrors/aibreze.git`). **Not pushed to GitHub `origin`.**

The user was about to: shut Cursor, rename the GitHub repo to
`Catalyst-Forge-LLC/smellcheck`, rename this folder (was
`z:\workspace\aibreze`). Confirm those three happened before you
assume remotes or paths.

## Decisions already made

Do not reopen these.

- Product name: Smell Check (two words). Package / skill / folder:
  `smellcheck`.
- npm: publish `smellcheck@0.2.0`, then **deprecate `aibreze`** with a
  message that points at `smellcheck`. No alias package.
- Spray stays. Maxim is still "Spray the prose, not the author."
- Domain: `smellcheck.dev` is primary. `aibreze.com` 301s to it.
  Cloudflare Pages project becomes `smellcheck` (not left as `aibreze`).
- Core tagline swap: "A spray, not a breeze." → "Prose, not code
  smells."
- Agents must not run `npm publish` / `pnpm publish`. The user publishes.

## Done in the repo

- `package.json` is `smellcheck@0.2.0`. Homepage and repo URLs already
  point at `smellcheck.dev` and `Catalyst-Forge-LLC/smellcheck`.
- `skills/aibreze/` → `skills/smellcheck/`. Sync script, ZIP, pocket
  card, Cursor rule file (`.cursor/rules/smellcheck.mdc`).
- Site copy, docs, About names table, FilePress `url`, Wrangler
  `name`, `ship` script (`--project-name=smellcheck`).
- `site/static/_redirects` 301s `/skills/aibreze.zip` and
  `/skills/aibreze/*` so old 0.1.x rule URLs still resolve.
- Test `no rule file still carries the old brand` fails if any file
  in `rules/` says aibreze.

## Do next, in this order

### 1. Confirm the user's rename

```bash
pwd
git remote -v
git log -1 --oneline
```

Expect the folder and GitHub remote to say `smellcheck`. The local
mirror on `D:` may still be `aibreze.git` until they rename it.
`.cursor/rules/git-user-commits.mdc` still names
`D:/git-mirrors/aibreze.git` — update that path if they renamed the
mirror.

Remotes as of the handoff (before their rename):

| Remote | URL |
| --- | --- |
| `origin` | `https://github.com/Catalyst-Forge-LLC/aibreze.git` |
| `backup` | `D:/git-mirrors/aibreze.git` |

The rule file claims `origin` is the local mirror. That is stale.
`origin` is GitHub. `backup` is the drive. Push policy in that file
still applies: commit, then push (to whichever remote is the mirror
after they settle names). Do not force-push. Do not publish.

### 2. Bump FilePress

`getfilepress@0.1.25` is on npm. `site/package.json` still has
`^0.1.24`.

`0.1.24` is broken: after a successful SvelteKit build,
`copy-path-mounts.mjs` imports `./assert-no-genie.mjs`, which is
missing from the published tarball. That step writes `_headers`,
merges engine redirects, and mounts `docs/dist` at `/docs`. Without
it, `site/build/docs` is missing and `pnpm ship` dies.

```bash
cd site && pnpm add -D getfilepress@0.1.25
cd .. && pnpm --dir site run build
```

If the build exits 0 and `site/build/docs/index.html` exists, the
blocker is gone. Prior house pattern: a "Sync getfilepress to 0.1.x"
commit.

Also fix `.cursor/rules/ship.mdc`: it still says Pages project
`aibreze`. It should say `smellcheck`.

### 3. Facts blobs

`APP_FACTS.md` and `skills/smellcheck/SKILL_FACTS.md` frontmatter
already say Smell Check / 0.2.0. The **viewer hashes** still encode
the old name:

- `README.md` nutrition-label links
- `site/filepress.config.ts` footer AppFacts / SkillFacts
- `[appfacts-label]` at the bottom of `APP_FACTS.md`
- `[skillfacts-label]` at the bottom of `SKILL_FACTS.md`

Regenerate with the house AppFacts / SkillFacts tooling. Do not
hand-edit the `af1.` / `sf1.` blobs.

### 4. Site + domain (user + agent)

`pnpm ship` from the repo root. First deploy of project `smellcheck`
creates it. Then, in the Cloudflare dashboard (user):

1. Attach `smellcheck.dev` to Pages project `smellcheck`.
2. Keep `aibreze.com` as a redirect source onto `smellcheck.dev`
   (301, preserve path).
3. Old Pages project `aibreze` can be retired once the new one is
   live and the domain move is confirmed.

`site/README.md` already has the domain checklist.

### 5. npm (user only)

```bash
# after tests and a clean build
pnpm publish   # user, not the agent
npm deprecate aibreze "Renamed to smellcheck. pnpm add -D smellcheck"
```

`smellcheck@0.0.0` is a name hold (`description: Name hold.`,
maintainer `acmegeek`). The publish gate compares local `0.2.0` to
npm latest `0.0.0`, sees local ahead, and will not bump.

`aibreze@0.1.16` stays on the registry as the deprecated pointer.

### 6. Other repos

House projects that still install `aibreze` or copy
`.cursor/rules/aibreze.mdc` / `skills/aibreze/`:

- ember-dossier
- temper-pass
- anything that got a Helm "bump aibreze" commit
- FilePress skill-page spec, if it still names this package

Point them at `smellcheck`. Pocket card copy dest is
`.cursor/rules/smellcheck.mdc`. Skill folder is `skills/smellcheck/`.

## Do not redo

- Renaming spray / Febreze / the bottle-and-page mark. Spray is the
  verb; the mark still fits.
- Inventing a CLI. v1 has none.
- Humanizer claims. Same standard either way.
- Publishing from the agent.

## Voice / overlay

This repo *is* the package. Overlay: site and README speak as the
product (Smell Check / it). No corporate we. No builder I.

Protected maxims: Earn the word. Spray the prose, not the author.
Have you smell-checked that?

## Quick verify

```bash
pnpm test
rg -i aibreze --glob '!node_modules' --glob '!**/build/**' --glob '!dist/**' --glob '!docs/detangler-report-*.md' --glob '!RESUME.md'
```

Allowed leftover hits: the brand-guard test, `_redirects` old paths,
`aibreze.com` 301 notes, this file, the published detangler report.
Everything else is a miss.

## Transcript if you need it

Prior chat: Cursor agent transcripts under
`C:\Users\acmegeek\.cursor\projects\z-workspace-aibreze\agent-transcripts\2d7453ff-6f74-44e9-abd0-f5f1f9f9a304`
(folder name will change after the workspace path changes).

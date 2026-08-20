<p align="center">
  <img src="site/static/logo.svg" alt="aiBreze" width="128" />
</p>

# aiBreze

An installable writing rule set for AI agents.

Editorial rules for prose that says something instead of sounding like it.
AI-assisted or not. Written **aiBreze**. npm **`aibreze`**. A spray, not a
breeze.

Spray the prose, not the author. Earn the word.

**Docs:** [aibreze.com/docs](https://aibreze.com/docs) · **Site:** [aibreze.com](https://aibreze.com)

## Install

```bash
pnpm add -D aibreze
```

Copy `node_modules/aibreze/rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`.
Keep a short overlay. Full wiring: [docs](https://aibreze.com/docs/install).

Or skip npm and [install the skill](https://aibreze.com/skill) as a folder.

## Not a humanizer

aiBreze does not determine whether a human or a model wrote something, and it
does not try to fool AI detectors. Same standard either way. If the prose
smells, spray it.

## Development

```bash
pnpm install
pnpm test
pnpm site:dev
```

Site (FilePress + docs mount): `pnpm ship`. The maintainer publishes to npm.
Agents must not run `npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.

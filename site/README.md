# aibreze.com

Marketing site for [aiBreze](https://www.npmjs.com/package/aibreze), built with
[FilePress](https://getfilepress.com) ([`getfilepress`](https://www.npmjs.com/package/getfilepress)
on npm).

```bash
pnpm install
pnpm dev          # local preview
pnpm build        # → build/
```

From the package root: `pnpm site:dev`, `pnpm site:build`, `pnpm ship`.

## Deploy (Cloudflare Pages)

**Use one pipeline only.** Dual deploys overwrite each other when asset hashes
disagree.

```bash
pnpm ship
# = pnpm build && wrangler pages deploy build --project-name=aibreze
```

Then attach **aibreze.com** in the Cloudflare dashboard.

### Git-connected Pages

| Setting | Value |
| --- | --- |
| Root directory | `site` |
| Build command | `pnpm install && pnpm build` |
| Output directory | `build` |

Dependency is the public npm package:

```json
"getfilepress": "^0.1.2"
```

## Launch checklist

- [ ] Make the GitHub repo public (nav GitHub link 404s for everyone else until then)
- [ ] `pnpm ship` (or git-connected Pages) and confirm `https://aibreze.com`
- [ ] Confirm `og:image` / Twitter card in a debugger

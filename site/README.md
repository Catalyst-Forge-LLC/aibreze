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

If [LocalBerth](https://www.npmjs.com/package/localberth) is installed, this site stays on **5181** as `aibreze-site`.

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
"getfilepress": "^0.1.3"
```

## Launch checklist

- [x] GitHub repo is public
- [x] Site live at `https://aibreze.com`
- [ ] Confirm `og:image` / Twitter card in a debugger

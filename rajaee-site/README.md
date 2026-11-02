# rajaee.ca

Personal portfolio site. Plain HTML, CSS and JavaScript. No build step, no dependencies.
Hosted on Cloudflare Workers (static assets). Every commit to `main` redeploys the site in about a minute.

## Where things live

| File | What it holds | Touch it when |
|---|---|---|
| `data/content.js` | Projects, "Now" items, categories, email, resume filename | Adding or editing a project or Now item |
| `games/*.js` | One file per game | Adding a game |
| `index.html` | Page shell and the list of script files | Adding a game (one line) |
| `app.js` | Pages, routing, filters (the engine) | Changing how a page looks or works |
| `sky.js` | The animated star background | Changing the background |
| `style.css` | All styling and colours | Changing the look |
| `_headers` | Security rules (CSP and others) | Almost never |
| `Rajaee_Mundle_Resume.pdf` | The one-page resume the site links to | Replace the file, keep the same name |
| `wrangler.jsonc`, `.assetsignore`, `README.md` | Deploy config. Not published | Never |

## Add a project
Open `data/content.js`, copy an existing block inside `PROJECTS`, change its text, and give it a new unique `id` that starts with `p-` and uses only lowercase letters, numbers and hyphens. Keep the commas between blocks. If you use a new `cat` (category), add it to `CATS` too.

## Add a "Now" item
Add a block to `NOW` in `data/content.js`. `start` is `YYYY-MM-DD`. The day counter is automatic. Set `link` to a project `id`, or `""` for none.

## Add a game
1. Copy `games/starfall.js` to `games/yourgame.js`. Change the `id` (starts with `g-`), title, `started`, blurb, `learned` list and the game code.
2. In `index.html`, add `<script src="games/yourgame.js"></script>` on the line after the Starfall one.

Only write in `learned` what is true: what you actually learned from that game.

## Safety rules
- The security rules in `_headers` only allow scripts from this site. Do not paste in scripts from other websites, or the browser will block them.
- Do not put passwords, keys or private details in this repo. It is public.
- Change one thing at a time and commit it on its own, so any change is easy to undo.

## If something breaks
- GitHub: open the commit that broke it and click **Revert**. That makes a new commit that undoes it.
- Cloudflare: open the project, go to **Deployments**, find the last good one and roll back to it.

## Asking Claude for changes
Attach this repo's files (or a zip) and say what you want. Examples:
- "Add a project: [title], [dates], [what I did], [numbers]. Put it in data/content.js."
- "Add a Now item that started on [date]."
- "Build a new game called [name] in games/. Here is what I want it to do."
- "Make the Projects page cards bigger."
Ask for only the changed files back, and say which ones to replace.

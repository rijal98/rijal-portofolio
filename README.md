# Muhammad Rijal Portfolio

Static site (HTML + CSS + JS), no build step. Upload the contents of this folder to GitHub Pages (the `CNAME` file for arrijal.tech is included).

## Editing content
All text lives in the `DATA` object in `assets/js/main.js`:
- `projects` — add a new object; use `cover: "img:file.webp"` to use an image from `assets/img/`
- `experience` — update `date` to the real dates
- `research`, `certs`, `skills`, `socials`

Local preview: `python3 -m http.server`, then open http://localhost:8000

# Hisaab Kitaab site

Landing page and privacy policy for the Hisaab Kitaab Android app. Plain HTML, CSS and JS. No build step, no dependencies.

## Publish with GitHub Pages

1. Push this folder to the `main` branch of the repo.
2. Repo Settings, Pages, "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site goes live at `https://<your-username>.github.io/hisaab-kitaab-site/`.
4. The privacy policy URL for Play Console is `https://<your-username>.github.io/hisaab-kitaab-site/privacy/`.

## Things to fill in

- `privacy/index.html`: replace `[add your contact email here before publishing]` with your email.
- `index.html`: when the app is live on Google Play, put its store URL in `<body data-play="">`. Both buttons then switch from "Coming soon" to "Get it on Google Play".

## Notes

- Hindi and English toggle, and light and dark theme, are remembered in the browser.
- Animations respect "reduce motion" in the visitor's system settings.
- Sample names and numbers in the demos are made up.

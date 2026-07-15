# Shruthi & Vignesh — Responsive Wedding Invitation

This package is a de-branded, static South Indian wedding invitation website. The deployed site uses only HTML, CSS, JavaScript, and local images. It does not require `npm start`, a database, a backend, or a local server.

## Open it locally

1. Open the `site` folder.
2. Double-click `index.html`.
3. The invitation opens directly in the browser.

Internet access is used only for the Google Fonts stylesheet and the Google Maps destination link. All invitation artwork and runtime JavaScript are local.

## Folder structure

```text
site/                  Final static website published by Netlify
  index.html
  styles.css
  script.js
  assets/
source/                Optional maintainable React + Tailwind source
qa/                    Automated responsive audit results
netlify.toml           Netlify publish and security-header configuration
QA_REPORT.md           Tested viewport and accessibility summary
FILE_CHANGES.md        Complete modification list
```

The `site` folder is the production deliverable. The `source` folder preserves the component-based React/Tailwind implementation and responsive `sm:`, `md:`, `lg:`, `xl:`, and `2xl:` workflow for future development. Netlify publishes only `site`, so no framework build runs in production.

# One-time GitHub setup

## Option A — GitHub website and GitHub Desktop

1. Sign in to GitHub and create a new empty repository, for example `shruthi-vignesh-wedding`.
2. Do not add a README, `.gitignore`, or licence while creating it, because those files are already included here.
3. Open GitHub Desktop.
4. Choose **File → Add local repository** and select this extracted project folder.
5. If GitHub Desktop says it is not a Git repository, choose **create a repository here**.
6. Commit all files with the message `Responsive wedding invitation`.
7. Choose **Publish repository**, select the repository name, and publish it.

## Option B — PowerShell commands

Create an empty GitHub repository first, then run these commands from this project folder:

```powershell
git init
git add .
git commit -m "Responsive wedding invitation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` before running the `git remote add` command.

# One-time Netlify deployment

1. Sign in to Netlify.
2. Select **Add new project → Import an existing project**.
3. Select **GitHub** and approve access when prompted.
4. Select the wedding repository.
5. Use these deployment settings:
   - Production branch: `main`
   - Base directory: leave blank
   - Build command: leave blank
   - Publish directory: `site`
6. Select **Publish** or **Deploy site**.
7. Netlify creates a public `*.netlify.app` URL. It remains available without your computer running.
8. To choose a clearer URL, open the project’s domain settings and change the generated site name, subject to availability.

`netlify.toml` already fixes the publish directory as `site`, so the repository is safe to connect even when Netlify auto-detects settings.

## Automatic updates after setup

Edit files, then push to GitHub:

```powershell
git add .
git commit -m "Update wedding invitation"
git push
```

Netlify automatically publishes the new commit. No manual upload and no local server are required.

# Editing wedding details

For a quick static edit, update text directly in `site/index.html`. Dates used by the live countdown are stored in the `data-target` attribute on the `#countdown` element.

For component-based editing, update `source/src/config/weddingConfig.js`. The optional React source is included for maintainability, but the supplied `site` folder is already the final static output and does not need rebuilding.

# Important notes

- Emergent branding, visual-edit hooks, health-check plugins, platform metadata, injected badges, and PostHog code were removed.
- The original project did not contain telephone numbers or email addresses, so none were invented. Venue address and Google Maps access remain keyboard- and screen-reader-accessible.
- The public deployment itself requires your GitHub and Netlify authorization. This package cannot create or sign in to those accounts on your behalf.

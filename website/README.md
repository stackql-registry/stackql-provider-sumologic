# Website

The `sumologic` provider microsite, built with [Docusaurus](https://docusaurus.io/) 3.10 on the shared [stackql/docusaurus-config](https://github.com/stackql/docusaurus-config) (vendored into `.shared-config/` by the `prestart` / `prebuild` hooks) and served at https://sumologic-provider.stackql.io.

The content under `docs/` is generated - run `make docs` from the repository root (it renders `provider-dev/docgen/provider-data/headerContent1.txt` and `headerContent2.txt` into `docs/index.md` and one page per resource, then sanitizes the output for MDX). Do not edit `docs/` by hand.

## Local development

```bash
yarn
yarn start
```

Starts a local dev server; most changes are reflected live.

## Build

```bash
yarn build
```

Generates the static site into `build/` (the same command the deployment workflow runs). `make docs-build` from the repository root does `yarn install && yarn build`.

## Deployment

The site is deployed with GitHub Pages through GitHub Actions - there is no Netlify site and no `gh-pages` branch:

- `.github/workflows/prod-web-deploy.yml` runs on every push to `main` that touches `website/**`, builds the site and publishes `website/build` with `actions/upload-pages-artifact` + `actions/deploy-pages`
- `.github/workflows/test-web-deploy.yml` test-builds the site on pull requests
- `static/CNAME` (`sumologic-provider.stackql.io`) is copied into the build so the custom domain is set on every deployment

Repository settings: Settings -> Pages -> Build and deployment -> Source: **GitHub Actions**; Custom domain: `sumologic-provider.stackql.io`; Enforce HTTPS on. DNS: a `CNAME` record for `sumologic-provider.stackql.io` pointing at `stackql.github.io.`.

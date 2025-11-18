# Changelog
All notable changes to the Campfire repository. Releases follow semantic versioning.

## [0.1.4] - 2025-11-18
### Fixed
- Updated the GitHub Pages deployment workflow so `gh-pages` can push using `GITHUB_TOKEN` (configuring a rewritten repo URL, bot identity, and write permissions).
- Ensured `npm run deploy` runs cleanly during Actions runs by including `predeploy`/`deploy` in `package.json`.

## [0.1.3] - 2025-11-17
### Added
- Served the docs site via GitHub Pages (`homepage` pointing to `https://jeremyfuksa.github.io/campfire`), documented it in the README, and added a deploy workflow.
- Introduced `gh-pages` and deploy scripts; configured the AGENTS guide to mention releases that bump versions automatically.

## [0.1.2] - 2025-11-16
### Added
- Reworked the Getting Started hero into a marketing-forward layout that highlights the npm install steps and designer-friendly messaging.
- Linked site nav/footer labels directly to the GitHub repo and issues page to make the project more discoverable.

## [0.1.1] - 2025-11-15
### Added
- `release` script now runs `npm version patch` before building/publishing to keep semver aligned with releases.
- Documented the release expectations inside `AGENTS.md`.

## [0.1.0] - Initial release
### Added
- Initial build of the Campfire docs site and distributable component library.

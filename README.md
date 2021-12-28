# Ragan's Starter Project for a web infrastructure full-typescript monorepo with React/Express


# TODO: document this whole thing


# Tools:

## syncpack
We use syncpack to ensure that packages use the same version of shared dependencies (yup, typescript, jest, etc.). We do this by running ```yarn dlx syncpack fix-mismatches --filter "typescript|yup|jest"```. TODO: Add this as a githook before every commit


# Workflows

## Releasing
When ready for a release, run `yarn workspaces foreach version major|minor|patch -d`, followed by `yarn version apply --all`, or `yarn workspaces foreach version major|minor|patch -i`. the -d (--deferred) flag means that changes only happen after `yarn version apply --all` is run, while the -i (--immediate) flag makes things happen immediately.

use either "major", "minor" or "patch" to signal what semver change you're making.

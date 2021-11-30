# Ragan's Starter Project for a web infrastructure full-typescript monorepo with React/Express


# TODO: document this whole thing


# Tools:

## syncpack
We use syncpack to ensure that packages use the same version of shared dependencies (yup, typescript, jest, etc.). We do this by running ```yarn dlx syncpack fix-mismatches --filter "typescript|yup|jest"```. TODO: Add this as a githook before every commit

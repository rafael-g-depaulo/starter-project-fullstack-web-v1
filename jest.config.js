module.exports = {
  projects: [
    "<rootDir>/libs/*",
    "<rootDir>/server",
    "<rootDir>/client",
  ],
  
  testPathIgnorePatterns: [
    "<rootDir>",
    "/node_modules/",
    "/dist/",
    "/.cache/",
  ],
}

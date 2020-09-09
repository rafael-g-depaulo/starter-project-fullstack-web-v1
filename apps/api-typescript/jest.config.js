const path = require("path")

module.exports = {
  name: 'api',
  displayName: {
    name: 'API',
    color: 'yellow',
  },
  moduleDirectories: ["node_modules", path.join(__dirname, "src")],
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/"
  ]
}

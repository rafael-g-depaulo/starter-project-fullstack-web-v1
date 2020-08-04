module.exports = {
  name: 'client',
  displayName: {
    name: 'CLIENT',
    color: 'blue',
  },
  // setup jest
  setupFilesAfterEnv: ['./jest.setup.js'],

  // this ignores all assets imported with webpack when testing from the monorepo root
  moduleNameMapper: {
    "\\.(jpg|css|scss|sass|less|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":  "<rootDir>/jest.mock.js",
  },
}

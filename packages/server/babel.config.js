module.exports = {
  
  presets: [
    "@babel/preset-env"
  ],
  
  plugins: [
    // module resolver for absolute imports
    [
      "module-resolver",
      {
        root: ["."],
        alias: {},
      },
    ],

    // for async await
    "@babel/plugin-transform-runtime",
  ],
}

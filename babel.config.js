module.exports = {
  babelrcRoots: [
    ".",
    "libs/*",
    "apps/*",
  ],  
  
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  
  plugins: [
    'babel-plugin-styled-components',
  ],
};

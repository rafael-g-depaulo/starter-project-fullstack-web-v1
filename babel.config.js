module.exports = {
  babelrcRoots: [
    ".",
    "libs/*",
    "server",
    "client",
    "strapi",
  ],  
  
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  
  plugins: [
    'babel-plugin-styled-components',
  ],
};

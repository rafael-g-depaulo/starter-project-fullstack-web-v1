module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  staticDirs: ['../public'],
  // webPackFinal: async (config) => {
  //   console.log("CONFIG IS", config)
  //   return config
  // },
}

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // @see https://storybook.js.org/addons/@pbutlewski/storybook-html
    '@whitespace/storybook-addon-html',
    // @see https://storybook.js.org/addons/@storybook/addon-jest
    '@storybook/addon-jest',
  ],
};

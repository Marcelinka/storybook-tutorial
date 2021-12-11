import '../src/index.css';

// @see https://storybook.js.org/addons/@storybook/addon-console
import '@storybook/addon-console';

export const parameters = {
  //👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

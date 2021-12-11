import '../src/index.css';

// @see https://storybook.js.org/addons/@storybook/addon-console
import '@storybook/addon-console';

import prettierConfig from '../.prettierrc.js';

import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

export const decorators = [
  withTests({
    results,
  }),
];

export const parameters = {
  //👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: prettierConfig,
  },
};

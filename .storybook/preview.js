import '../src/index.css';

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

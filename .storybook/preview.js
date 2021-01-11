// Import the same 3rd party libraries global styles as the pages/_app.tsx (for UI consistency)
import '../src/components/appBootstrap/MultiversalGlobalExternalStyles';

/**
 * Story Global parameters for Storybook.
 *
 * Couldn't find a documentation reference for all options.
 *
 * @see https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    // See https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
    storySort: {
      method: 'alphabetical',
      order: [
        'Next Right Now',
        'Utilities',
        'Storybook Examples',
      ],
    },
  },
};

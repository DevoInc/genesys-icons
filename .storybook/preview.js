import { pagesOrder } from './order';
require('./preview.css');

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: { order: pagesOrder },
  },
}

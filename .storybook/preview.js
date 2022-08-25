import { pagesOrder } from './order';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: { order: pagesOrder },
  },
}

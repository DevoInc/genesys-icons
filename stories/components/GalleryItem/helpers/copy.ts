export const copyClassName = (className: string) =>
  navigator.clipboard
    .writeText(className)
    .then(() => true)
    .catch((error) => {
      /* eslint-disable-next-line no-console */
      console.error(
        'There was an error copying class name to clipboard.',
        error,
      );
      return false;
    });

export const copyReactComponent = (code: string) =>
  navigator.clipboard
    .writeText(code)
    .then(() => true)
    .catch((error) => {
      /* eslint-disable-next-line no-console */
      console.error(
        'There was an error copying React component to clipboard.',
        error,
      );
      return false;
    });

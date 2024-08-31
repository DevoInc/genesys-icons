const valueStringify = (value: string | number | boolean) =>
  valueMap[typeof value](value);

const valueMap = {
  string: (value: string) => `"${value}"`,
  number: (value: number) => `{${value}}`,
  boolean: (value: boolean) => `{${value ? 'true' : 'false'}}`,
};

export const attrsStringify = (obj: {
  [key: string]: number | string | boolean;
}) =>
  Object.entries(obj)
    .map(([key, value]) => `${key}=${valueStringify(value)}`)
    .join(' ');

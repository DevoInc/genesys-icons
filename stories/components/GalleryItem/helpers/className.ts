import decamelize from 'decamelize';

export const getClassName = (name: string) =>
  `gi-${decamelize(name.slice(2), { separator: '_' })}`;

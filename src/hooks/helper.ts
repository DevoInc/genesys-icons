import { IconContextProps } from "../context";

export const filterUndefined = (obj: { [key: string]: unknown }): IconContextProps =>
  Object.entries(obj)
    .filter(([_, value]) => value !== undefined)
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

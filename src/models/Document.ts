export type Document<K extends string, T> = {
  [key in K]: T;
};

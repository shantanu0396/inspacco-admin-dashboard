export type DocumentList<K extends string, T> = {
  [key in K]: {
    pageInfo?: {
      endCursor: string;
      hasNextPage: boolean;
    };
    edges: {
      node: T;
    }[];
    count?: number;
  };
};

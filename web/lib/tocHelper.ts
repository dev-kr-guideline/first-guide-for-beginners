export interface Post {
  title: string;
  url: string;
}

export const isPost = (slug: any): slug is Post => {
  return typeof slug?.title === 'string' && typeof slug?.filename === 'string';
}

export interface Directory {
  title: string;
  url: string;
  hasPost: boolean;
  children: (Post | Directory)[];
}

export const isDirectory = (slug: any): slug is Directory => {
  return typeof slug?.name === 'string' && Array.isArray(slug?.children);
}

export type TableOfContents = (Post | Directory)[];

export const readDocumentScaffold = (tableOfContents: TableOfContents): string[][] => {
  const result = tableOfContents.reduce((prev, curr) => {
    if (isDirectory(curr)) {
      const childContents = readDocumentScaffold(curr.children);
      const _temp = childContents.map<string[]>(content => [curr.url, ...content]);
      return [...prev, ..._temp];
    } else {
      return [...prev, [curr.url]];
    }
  }, [] as string[][]);
  return result;
};

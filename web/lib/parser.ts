import * as fs from 'fs';
import { remark } from 'remark';
import html from 'remark-html';

export const readMarkdownAsHtml = (markdownFilePath: string) => {
  const markdown = fs.readFileSync(markdownFilePath, 'utf8');
  return markdownToHtml(markdown);
};

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

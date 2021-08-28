import * as fs from 'fs';

export const readMarkdownAsHtml = (markdownFilePath: string) => {
  const markdown = fs.readFileSync(markdownFilePath, 'utf8');
  return markdownToHtml(markdown);
};

export default async function markdownToHtml(markdown: string) {
  const {remark} = await import('remark');
  const { default: remarkHtml} = await import('remark-html');
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

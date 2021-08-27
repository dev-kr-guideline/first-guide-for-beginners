import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { readMarkdownAsHtml } from '../lib/parser';
import * as path from 'path';
import { DOCUMENT_ROOT } from '../lib/constants';
import { Markdown } from '../components/markdown';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Markdown content={props.post} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const introduceHtmlContent = await readMarkdownAsHtml(path.resolve(DOCUMENT_ROOT, 'introduce.md'));
  return { props: { post: introduceHtmlContent } };
};

export default Home;

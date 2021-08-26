import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import { DOCUMENT_ROOT } from '../lib/constants';
import * as fs from 'fs';
import * as path from 'path';
import TABLE_OF_CONTENTS from '../lib/toc';
import { readDocumentScaffold } from '../lib/tocHelper';
import markdownToHtml from '../lib/parser';
import { Center } from '@chakra-ui/react';

const Post = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (props.post === '') {
    return (
      <Center bg='white' h='200px' color='tomato'>
        404 / Not Found
      </Center>
    );
  }
  return (
    <div className='md'>
      <div dangerouslySetInnerHTML={{ __html: props.post }} />
    </div>
  );
};

interface StaticHTMLProps {
  post: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tableOfContents = TABLE_OF_CONTENTS;
  const documentScaffold = readDocumentScaffold(tableOfContents);

  return {
    paths: documentScaffold.map(path => ({ params: { slug: path } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StaticHTMLProps> = async context => {
  const { params } = context;
  const slug = params?.slug;

  if (Array.isArray(slug)) {
    const targetPath = path.join(DOCUMENT_ROOT, ...slug).concat('.md');
    console.log(targetPath);
    try {
      const mdFileContent = fs.readFileSync(targetPath, 'utf8');
      const htmlContent = await markdownToHtml(mdFileContent);

      return { props: { post: htmlContent } };
    } catch {
      return { props: { post: '' } };
    }
  }

  return { props: { post: '' } };
};

export default Post;

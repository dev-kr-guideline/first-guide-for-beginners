import { Box, Container } from '@chakra-ui/react';
import React from 'react';

interface MarkdownProps {
  content: string;
}

export const Markdown = ({ content }: MarkdownProps) => {
  return <Box className='md' dangerouslySetInnerHTML={{ __html: content }}></Box>;
};

export default Markdown;

import React from 'react';

interface MarkdownProps {
  content: string;
}

export const Markdown = ({ content }: MarkdownProps) => {
  return <div className='md' dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default Markdown;

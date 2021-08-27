import { Box, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import { isDirectory, TableOfContents } from '../lib/tocHelper';
import Link from 'next/link';

const NavListItem = (content: TableOfContents) => {
  return content.map(item => {
    if (isDirectory(item)) {
      return NavList(item.children);
    } else {
      return (
        <ListItem key={item.url} listStyleType='none' marginStart={-4} lineHeight={1.7}>
          <ListIcon as={ChevronRightIcon} color='blue.800' />

          <Link href={`/${item.url}`}>{item.title}</Link>
        </ListItem>
      );
    }
  });
};

const NavList = (content: TableOfContents) => <UnorderedList>{NavListItem(content)}</UnorderedList>;

const Nav = ({ tableOfContents = [] }: { tableOfContents: TableOfContents }) => {
  return (
    <Box
      border='1px solid'
      borderColor='gray.200'
      borderRadius='lg'
      bgColor='blackAlpha.50'
      my={4}
      py={4}
      px={6}
      d='inline-block'
    >
      {NavList(tableOfContents)}
    </Box>
  );
};

export default Nav;

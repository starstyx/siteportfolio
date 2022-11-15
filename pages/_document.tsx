// Components
import { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

// Types
import type { DocumentContext, DocumentInitialProps } from 'next/document';

const CustomNextDocument = (props: DocumentInitialProps) => {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomNextDocument;

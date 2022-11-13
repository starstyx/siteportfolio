// Components
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { Server } from 'styletron-engine-atomic';

// Utils
import { styletron } from '../infra/styletron';

// Types
import type { DocumentContext, DocumentInitialProps as BaseDocumentInitialProps } from 'next/document';

type styletronSheetT = {
  css: string;
  attrs: {
    [key: string]: string;
  };
};
type DocumentInitialProps = BaseDocumentInitialProps & { stylesheets?: styletronSheetT[] };

const CustomNextDocument = (props: DocumentInitialProps) => {
  const { stylesheets } = props;

  return (
    <Html>
      <Head>
        {stylesheets?.map((sheet, index) => (
          <style 
            className="_styletron_hydrate_"
            dangerouslySetInnerHTML={{__html: sheet.css}}
            media={sheet.attrs.media}
            data-hydrate={sheet.attrs['data-hydrate']}
            key={index}
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

CustomNextDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  const page = ctx.renderPage((App: any) => function StyletronHOC(props: any) {
    return (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    );
  });

  const stylesheets = (styletron as Server).getStylesheets() || [];

  return {
    ...initialProps,
    ...page,
    stylesheets,
  };
}

export default CustomNextDocument;

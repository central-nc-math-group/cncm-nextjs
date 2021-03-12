import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext } from "next/document";
import type { AppProps } from "next/app";
import { ServerStyleSheets } from '@material-ui/core';
import { theme } from "../utils";

export default class PageDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

PageDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets: ServerStyleSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
...initialProps,
    styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
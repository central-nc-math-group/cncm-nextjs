import { Fragment, useEffect } from "react";
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import type { AppProps } from "next/app";
import { theme } from '../utils';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (!!jssStyles && !!jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>CNCM</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
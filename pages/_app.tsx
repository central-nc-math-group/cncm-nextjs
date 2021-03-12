import { Fragment } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "../components/Theme";
import dynamic from "next/dynamic";
//import Footer from "../components/Footer";
//import NavBar from "../components/NavBar";
//import isServer from 'detect-node';

const NavBar = dynamic(import("../components/NavBar"));
const Footer = dynamic(import("../components/Footer"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <header>
          <NavBar />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </Fragment>
  );
}

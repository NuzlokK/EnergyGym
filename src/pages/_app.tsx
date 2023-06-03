import { ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextComponentType } from "next/types";
import "../styles/globals.css";

interface CustomPageProps {}

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  return <Component {...pageProps} />;
};

export default App;

import Head from "next/head";
import React from "react";
import { Navbar, Footer } from "../";
type LayotProps = {
  children: JSX.Element[];
};
const Layout: React.FC<LayotProps> = ({ children }) => {
  return (
    <div className="md:mx-40 sm:mx-10 ss:mx-8 mx-4">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Meguenni Walid</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

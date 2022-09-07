import React from "react";
import { Navbar, Footer } from "../";
type LayotProps = {
  children: JSX.Element[];
};
const Layout: React.FC<LayotProps> = ({ children }) => {
  return (
      <div className="md:mx-40 sm:mx-10 ss:mx-8 mx-4">
        <Navbar />
        {children}
        <Footer />
      </div>
  );
};

export default Layout;

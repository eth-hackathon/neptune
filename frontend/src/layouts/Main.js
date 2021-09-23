import React from "react";
import TopNavbar from "components/TopNavbar.js";

const Main = ({children}) => (
  <>
    <TopNavbar></TopNavbar>
    <main className="container mx-auto">
      <section>{children}</section>
    </main>
  </>
);

export {Main};

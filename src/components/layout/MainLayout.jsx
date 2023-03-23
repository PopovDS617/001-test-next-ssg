import React from "react";
import { Header } from "../navigation/Header";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;

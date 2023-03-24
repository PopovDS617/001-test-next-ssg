import React from "react";

export const ArticleLayout = ({ children }) => {
  return (
    <div className="flex justify-center flex-col items-center mx-auto ">
      {children}
    </div>
  );
};

import Nav from "@/components/Nav";
import React from "react";

const ExhibitionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default ExhibitionsLayout;

import Nav from "@/components/Nav";
import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default ShopLayout;

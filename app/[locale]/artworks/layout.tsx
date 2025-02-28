import Nav from "@/components/Nav";
import React from "react";

const ArtworksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default ArtworksLayout;

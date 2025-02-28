import Nav from "@/components/Nav";
import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default ContactLayout;

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import * as React from "react";
import { ReactElement } from "react";

export interface ILayoutProps {
  children: ReactElement;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

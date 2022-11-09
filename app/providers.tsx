"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { ProvideFilter } from "./context/filter";
import { ProvideSection } from "./context/section";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    // <ThemeProvider>
    <ProvideFilter>
      <ProvideSection>{children}</ProvideSection>
    </ProvideFilter>
    // </ThemeProvider>
  );
}

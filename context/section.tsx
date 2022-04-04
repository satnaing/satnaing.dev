import React, { createContext, useContext, useState } from "react";

interface SectionInitialType {
  currentSection: string;
  onSectionChange?: (val: string) => void;
}

export const sectionContext = createContext<SectionInitialType>({
  currentSection: "",
});

export const ProvideSection = ({ children }: { children: React.ReactNode }) => {
  const value = useProvideSection();
  return (
    <sectionContext.Provider value={value}>{children}</sectionContext.Provider>
  );
};

export const useSection = () => useContext(sectionContext);

const useProvideSection = () => {
  const [currentSection, setCurrentSection] = useState("");

  const onSectionChange = (val: string) => {
    setCurrentSection(val);
  };

  return {
    currentSection,
    onSectionChange,
  };
};

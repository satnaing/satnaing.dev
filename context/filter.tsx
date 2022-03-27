import React, { createContext, useContext, useState } from "react";

interface FilterInitialType {
  searchText: string;
  postLanguage: LanguageType;
  onSearch?: (val: string) => void;
  onLanguageChange?: (val: LanguageType) => void;
}

export type LanguageType = "All" | "English" | "Myanmar";

export const filterContext = createContext<FilterInitialType>({
  searchText: "",
  postLanguage: "All",
});

export const ProvideFilter = ({ children }: { children: React.ReactNode }) => {
  const value = useProvideFilter();
  return (
    <filterContext.Provider value={value}>{children}</filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);

const useProvideFilter = () => {
  const [searchText, setSearchText] = useState("");
  const [postLanguage, setPostLanguage] = useState<LanguageType>("All");

  const onSearch = (val: string) => {
    setSearchText(val);
  };

  const onLanguageChange = (val: LanguageType) => {
    setPostLanguage(val);
  };

  return {
    searchText,
    postLanguage,
    onSearch,
    onLanguageChange,
  };
};

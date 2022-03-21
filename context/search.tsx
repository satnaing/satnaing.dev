import React, { createContext, useContext, useState } from "react";

interface SearchInitialType {
  searchText: string;
  onSearch?: (val: string) => void;
}

export const searchContext = createContext<SearchInitialType>({
  searchText: "",
});

export const ProvideSearch = ({ children }: { children: React.ReactNode }) => {
  const value = useProvideSearch();
  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
};

export const useSearch = () => useContext(searchContext);

const useProvideSearch = () => {
  const [searchText, setSearchText] = useState("");

  const onSearch = (val: string) => {
    setSearchText(val);
  };

  return {
    searchText,
    onSearch,
  };
};

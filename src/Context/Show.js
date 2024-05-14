import React, { createContext, useState } from "react";

export const Show = createContext(null);

export const ShowProvider = ({ children }) => {
  const [select, setSelect] = useState(false);
  const [book, setBook] = useState("");
  const [choose, setChoose] = useState("");
  const [information , setInformation] = useState(false)

  const value = {
    select,
    setSelect,
    book,
    setBook,
    setChoose,
    choose,
    information,
    setInformation
  };

  return <Show.Provider value={value}>{children}</Show.Provider>;
};

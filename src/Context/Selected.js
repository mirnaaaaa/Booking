import React, { createContext, useState } from "react";
import { add } from "date-fns";

export const Selected = createContext(null);

export const SelectedProvider = ({ children }) => {
  const [date, setDate] = useState({
    theDate: null,
    theTime: null,
  });

  const getTimes = () => {
    if (!date.theDate) return;
    const beginning = add(date.theDate, { hours: 10 });
    const end = add(date.theDate, { hours: 21 });
    const gap = 240;
    
    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: gap })) {
      times.push(i);
    }
    return times;

  };

  const times = getTimes();

  const value = {
    date,
    setDate,
    times
  };

  return <Selected.Provider value={value}>{children}</Selected.Provider>;
};

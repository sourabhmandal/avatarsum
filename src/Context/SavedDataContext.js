import React, { createContext, useState } from 'react';

export const SavedDataContext = createContext({});

function ThemeProvider(props) {
  const [Theme, setTheme] = useState({});
  return (
    <SavedDataContext.Provider value={(Theme, setTheme)}>
      {props.children}
    </SavedDataContext.Provider>
  );
}

export default ThemeProvider;

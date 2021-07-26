import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({});

function ThemeProvider(props) {
  const [Theme, setTheme] = useState({});
  return (
    <ThemeContext.Provider value={(Theme, setTheme)}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

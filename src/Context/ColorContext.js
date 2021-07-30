import React, { createContext, useState } from 'react';
import colors from 'nice-color-palettes';

export const ColorContext = createContext({});

function ColorProvider(props) {
  const [pallete, setPallete] = useState(
    colors[Math.floor(Math.random() * 100)]
  );

  const SetPallete = () => {
    setPallete(colors[Math.floor(Math.random() * 100)]);
  };

  return (
    <ColorContext.Provider value={{ pallete, SetPallete, setPallete }}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorProvider;

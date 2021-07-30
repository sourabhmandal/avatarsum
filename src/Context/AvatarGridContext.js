import React, { createContext, useState } from 'react';
import colors from 'nice-color-palettes';

export const AvatarGridContext = createContext({});

function AvatarGridProvider(props) {
  const variation = [];
  const background = 1;
  const ears = 1;
  const eyes = 14;
  const faces = 1;
  const outline = 1;
  const mouths = 4;

  function shuffleArray(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const setVariation = () => {
    for (let bg = 1; bg <= background; bg++) {
      for (let ear = 1; ear <= ears; ear++) {
        for (let eye = 1; eye <= eyes; eye++) {
          for (let face = 1; face <= faces; face++) {
            for (let otl = 1; otl <= outline; otl++) {
              for (let mouth = 1; mouth <= mouths; mouth++) {
                variation.push({ bg, ear, eye, face, otl, mouth });
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < variation.length; i++) {
      shuffleArray(variation);
    }
  };

  setVariation();

  return (
    <AvatarGridContext.Provider
      value={{ variation, setVariation, shuffleArray }}
    >
      {props.children}
    </AvatarGridContext.Provider>
  );
}

export default AvatarGridProvider;

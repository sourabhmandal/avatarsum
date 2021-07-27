import React from 'react';
import Background1 from './Background/Background';
import Ears1 from './Ears/Ears1';
import Eyes10 from './Eyes/Eyes10';
import Eyes11 from './Eyes/Eyes11';
import Eyes12 from './Eyes/Eyes12';
import Eyes13 from './Eyes/Eyes13';
import Eyes14 from './Eyes/Eyes14';
import Eyes2 from './Eyes/Eyes2';
import Eyes3 from './Eyes/Eyes3';
import Eyes4 from './Eyes/Eyes4';
import Eyes5 from './Eyes/Eyes5';
import Eyes6 from './Eyes/Eyes6';
import Eyes7 from './Eyes/Eyes7';
import Eyes8 from './Eyes/Eyes8';
import Eyes9 from './Eyes/Eyes9';
import Face1 from './Face/Face1';
import FaceOutline1 from './FaceOutline/FaceOutline1';
import Mouth1 from './Mouth/Mouth1';
import Mouth2 from './Mouth/Mouth2';
import Mouth3 from './Mouth/Mouth3';
import Mouth4 from './Mouth/Mouth4';

function Avatar(props) {
  return (
    <>
      <svg
        width={props.width}
        height={props.heigth}
        viewBox='0 0 285.75 285.75'
        version='1.1'
        id='svg5'
      >
        <defs id='defs2' />
        <Background1 />
        <g
          label='Layer 1'
          groupmode='layer'
          id='layer1'
          style={{ display: 'inline' }}
        >
          <Face1 />
          <Ears1 />
          <FaceOutline1 />
          <Eyes14 />
          <Mouth3 />
        </g>
      </svg>
    </>
  );
}

export default Avatar;

Avatar.prototype = {
  height: Number,
  width: Number,
};

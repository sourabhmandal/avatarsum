import React from 'react';
import Ears from './Ears/Ears';
import Eyes from './Eyes/Eyes';
import Face from './Face/Face';
import FaceOutline from './FaceOutline/FaceOutline';
import Mouth from './Mouth/Mouth';

function Avatar() {
  return (
    <div>
      <svg
        width='1080'
        height='1080'
        viewBox='0 0 285.75 285.75'
        version='1.1'
        id='svg5'
      >
        <defs id='defs2' />
        <g
          label='Layer 1'
          groupmode='layer'
          id='layer1'
          style={{ display: 'inline' }}
        >
          <Face />
          <Ears />
          <FaceOutline />
          <Eyes />
          <Mouth />
        </g>
      </svg>
    </div>
  );
}

export default Avatar;

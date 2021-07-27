import React, { useContext } from 'react';
import { ColorContext } from '../../Context/ColorContext';

function Background1() {
  const { pallete } = useContext(ColorContext);
  return (
    <g id='layer10'>
      <rect
        style={{
          display: 'inline',
          fill: pallete[1],
          stroke: '#2e2633',
          strokeWidth: 0,
          strokeLinecap: 'round',
          strokeLinejoin: 'bevel',
          strokeOpacity: 0.553351,
        }}
        id='rect1058'
        width='286.12073'
        height='285.5137'
        x='-0.47686681'
        y='-0.11094625'
      />
    </g>
  );
}

export default Background1;

import React, { useContext } from 'react';
import { ColorContext } from '../../Context/ColorContext';

function Mouth2() {
  const { pallete } = useContext(ColorContext);
  return (
    <>
      <g id='layer4' style={{ display: 'inline' }}>
        <ellipse
          style={{
            display: 'inline',
            fill: pallete[3],
            fillOpacity: 1,
            stroke: pallete[3],
            strokeWidth: 0,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 0.553351,
          }}
          id='path18709'
          cx='143.99518'
          cy='191.22383'
          rx='31.694391'
          ry='24.077906'
        />
        <ellipse
          style={{
            display: 'inline',
            fill: '#2f2633',
            fillOpacity: 1,
            stroke: '#2f2633',
            strokeWidth: 0.753757,
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
          }}
          id='path4444'
          cx='143.55135'
          cy='180.56931'
          rx='8.7834692'
          ry='4.6906381'
        />
        <path
          style={{
            display: 'inline',
            fill: 'none',
            stroke: '#2f2633',
            strokeWidth: '5.29167',
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          d='m 143.77345,179.31593 v 21.6532 c 0,0 15.03853,-12.29403 22.93816,-0.87217'
          id='path4772'
        />
        <path
          style={{
            display: 'inline',
            fill: 'none',
            stroke: '#2f2633',
            strokeWidth: 5.29167,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          d='m 143.77345,179.31593 v 21.6532 c 0,0 -16.62505,-11.54859 -22.93816,-0.87217'
          id='path5040'
        />
      </g>
    </>
  );
}

export default Mouth2;

import React, { useContext } from 'react';
import { ColorContext } from '../../Context/ColorContext';

function Ears1() {
  const { pallete } = useContext(ColorContext);
  return (
    <>
      <path
        id='path16362'
        style={{
          fill: pallete[2],
          stroke: pallete[2],
          strokeWidth: 0,
          strokeLinecap: 'round',
          strokeLinejoin: 'bevel',
          strokeOpacity: 0.553351,
        }}
        transform-center-x='-4.5202169'
        transform-center-y='2.7317952'
        d='m 228.67558,74.468399 c 0,15.593573 -5.06794,25.102441 -21.02661,25.102441 -6.74489,0 -15.06444,-1.520971 -20.47825,-4.877214 -7.20389,-4.465989 -15.53036,-9.451112 -15.53036,-18.454094 0,-15.593572 12.59656,-27.372557 28.63484,-29.33103 15.841,-1.934383 28.40038,11.966325 28.40038,27.559897 z'
        nodetypes='ssssss'
      />
      <path
        id='path17933'
        style={{
          fill: pallete[2],
          stroke: pallete[2],
          strokeWidth: 0,
          strokeLinecap: 'round',
          strokeLinejoin: 'bevel',
          strokeOpacity: 0.553351,
        }}
        transform-center-x='4.5202169'
        transform-center-y='2.7317952'
        d='m 60.630124,74.119939 c 0,15.593573 5.06794,25.102443 21.02661,25.102443 6.74489,0 15.06444,-1.52097 20.478246,-4.877216 7.20389,-4.465989 15.53036,-9.451112 15.53036,-18.454094 0,-15.593572 -12.59656,-27.372557 -28.634836,-29.33103 -15.841,-1.934383 -28.40038,11.966325 -28.40038,27.559897 z'
        nodetypes='ssssss'
      />
    </>
  );
}

export default Ears1;

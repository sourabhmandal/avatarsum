import React, { useContext } from 'react';
import { ColorContext } from '../../Context/ColorContext';

function Eyes1() {
  const { pallete } = useContext(ColorContext);
  return (
    <>
      <ellipse
        style={{
          fill: pallete[2],
          fillOpacity: 1,
          stroke: pallete[2],
          strokeWidth: 0,
          strokeLinecap: 'round',
          strokeLinejoin: 'bevel',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 0.553351,
        }}
        id='path18117'
        cx='78.160355'
        cy='229.36308'
        rx='35.313034'
        ry='47.516399'
        transform='matrix(0.843395,-0.53729403,0.54166723,0.84059301,0,0)'
      />
      {/*eye ball*/}
      <ellipse
        style={{
          fill: '#2f2633',
          fillOpacity: 1,
          stroke: '#2f2633',
          strokeWidth: 0.912751,
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
        }}
        id='ellipse3785'
        cx='185.85931'
        cy='143.88072'
        rx='30.137184'
        ry='30.044037'
        transform-center-x='-19.419861'
        transform-center-y='1.677782'
      />
      <ellipse
        style={{
          fill: pallete[2],
          fillOpacity: 1,
          stroke: '#2e2633',
          strokeWidth: 0,
          strokeLinecap: 'round',
          strokeLinejoin: 'bevel',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 0.553351,
        }}
        id='ellipse18281'
        cx='-163.17892'
        cy='75.102852'
        rx='35.313034'
        ry='47.516399'
        transform='matrix(-0.843395,-0.53729403,-0.54166723,0.84059301,0,0)'
      />
      {/*eye ball*/}
      <ellipse
        style={{
          fill: '#2f2633',
          fillOpacity: 1,
          stroke: '#2f2633',
          strokeWidth: '0,912751',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
        }}
        id='ellipse4080'
        cx='101.72255'
        cy='143.88072'
        rx='30.137184'
        ry='30.044037'
        transform-center-x='-19.419861'
        transform-center-y='1.677782'
      />
      <ellipse
        style={{
          fill: '#ffffff',
          fillOpacity: 1,
          stroke: '#2f2633',
          strokeWidth: 0.962305,
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
        }}
        id='path4104'
        cx='195.95322'
        cy='131.26869'
        rx='6.9474864'
        ry='7.4368763'
      />
      <ellipse
        style={{
          fill: '#ffffff',
          fillOpacity: 1,
          stroke: '#2f2633',
          strokeWidth: 0.288867,
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
        }}
        id='ellipse4252'
        cx='203.52887'
        cy='139.94153'
        rx='2.1101363'
        ry='2.2063761'
      />
      <ellipse
        style={{
          fill: '#ffffff',
          fillOpacity: 1,
          stroke: '#2f2633',
          strokeWidth: 0.962305,
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
        }}
        id='ellipse4258'
        cx='119.09795'
        cy='132.33481'
        rx='6.9474864'
        ry='7.4368763'
      />
      <ellipse
        style={{
          fill: '#ffffff',
          fillOpacity: 1,
          stroke: '#2f2633',
          strokeWidth: 0.288867,
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
        }}
        id='ellipse4260'
        cx='126.67374'
        cy='141.00764'
        rx='2.1101363'
        ry='2.2063761'
      />
    </>
  );
}

export default Eyes1;

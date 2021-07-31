import React, { useContext, useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Background1 from './Background/Background';
import Ears1 from './Ears/Ears1';
import Eyes1 from './Eyes/Eyes1';
import Eyes2 from './Eyes/Eyes2';
import Eyes3 from './Eyes/Eyes3';
import Eyes4 from './Eyes/Eyes4';
import Eyes5 from './Eyes/Eyes5';
import Eyes6 from './Eyes/Eyes6';
import Eyes7 from './Eyes/Eyes7';
import Eyes8 from './Eyes/Eyes8';
import Eyes9 from './Eyes/Eyes9';
import Eyes10 from './Eyes/Eyes10';
import Eyes11 from './Eyes/Eyes11';
import Eyes12 from './Eyes/Eyes12';
import Eyes13 from './Eyes/Eyes13';
import Eyes14 from './Eyes/Eyes14';
import Face1 from './Face/Face1';
import FaceOutline1 from './FaceOutline/FaceOutline1';
import Mouth1 from './Mouth/Mouth1';
import Mouth2 from './Mouth/Mouth2';
import Mouth3 from './Mouth/Mouth3';
import Mouth4 from './Mouth/Mouth4';
import { ColorContext } from '../Context/ColorContext';
import { UserContext } from '../Context/UserContext';

function Avatar({ width, height, bg, ear, eye, face, otl, mouth }) {
  const { user } = useContext(UserContext);
  const getFace = () => {
    switch (face) {
      case 1:
        return <Face1 />;
      default:
        return <Face1 />;
    }
  };

  const getEar = () => {
    switch (ear) {
      case 1:
        return <Ears1 />;
      default:
        return <Ears1 />;
    }
  };

  const getFaceOutline = () => {
    switch (otl) {
      case 1:
        return <FaceOutline1 />;
      default:
        return <FaceOutline1 />;
    }
  };

  const getEye = () => {
    switch (eye) {
      case 1:
        return <Eyes1 />;
      case 2:
        return <Eyes2 />;
      case 3:
        return <Eyes3 />;
      case 4:
        return <Eyes4 />;
      case 5:
        return <Eyes5 />;
      case 6:
        return <Eyes6 />;
      case 7:
        return <Eyes7 />;
      case 8:
        return <Eyes8 />;
      case 9:
        return <Eyes9 />;
      case 10:
        return <Eyes10 />;
      case 11:
        return <Eyes11 />;
      case 12:
        return <Eyes12 />;
      case 13:
        return <Eyes13 />;
      case 14:
        return <Eyes14 />;
      default:
        return <Eyes1 />;
    }
  };

  const getMouth = () => {
    switch (mouth) {
      case 1:
        return <Mouth1 />;
      case 2:
        return <Mouth2 />;
      case 3:
        return <Mouth3 />;
      case 4:
        return <Mouth4 />;
      default:
        return <Mouth1 />;
    }
  };

  const handleAvatarSave = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      bg: bg,
      ear: ear,
      eye: eye,
      face: face,
      otl: otl,
      mouth: mouth,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`api/panda/${user.data.id}`, requestOptions)
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  const ref = useRef();
  const [copyValue, setCopyValue] = useState('');
  const { pallete } = useContext(ColorContext);

  useEffect(() => {
    if (ref.current) {
      const svgNode = ref.current.innerHTML;
      const svgStart = svgNode.indexOf('<svg');
      const svgEnd = svgNode.indexOf('</svg>') + 6;
      const svgResult = svgNode.substring(svgStart, svgEnd).toString();

      setCopyValue(svgResult);
    }
  }, [copyValue, pallete]);

  const handleSvgDownload = () => {
    if (ref.current) {
      const svgNode = ref.current.innerHTML;
      const svgStart = svgNode.indexOf('<svg');
      const svgEnd = svgNode.indexOf('</svg>') + 6;
      const svgResult = svgNode.substring(svgStart, svgEnd).toString();

      const blob = new Blob([svgResult], {
        type: 'image/svg+xml',
      });
      const element = document.createElement('a');
      element.download = 'panda.svg';
      element.href = window.URL.createObjectURL(blob);
      element.click();
      element.remove();
    }
  };

  return (
    <div
      className='backdrop-blur-sm'
      ref={ref}
      key={`${bg}-${ear}-${eye}-${face}-${otl}-${mouth}`}
    >
      <svg
        width={width}
        height={height}
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
          {getFace()}
          {getEar()}
          {getFaceOutline()}
          {getEye()}
          {getMouth()}
        </g>
      </svg>
      <div
        className='backdrop-filter backdrop-blur-sm opacity-0 duration-150	 hover:opacity-100 transition-opacity	 overlay top-0 left-0 absolute w-full h-full flex justify-center items-center'
        style={{ background: 'rgba(0,0,0,0.6)' }}
      >
        <div className=' text-center'>
          <button
            onClick={() => {
              handleAvatarSave();
            }}
            className='hover:bg-gray-400 my-1 mx-auto w-40 text-center py-1 border-4 font-bold duration-100 border-gray-400 hover:border-gray-100 rounded-full hover:text-gray-100 text-gray-400'
          >
            Add to collection
          </button>
          <hr className='my-2 mx-20' />
          <button
            onClick={handleSvgDownload}
            className='hover:bg-gray-400 my-1 mx-auto w-40 text-center py-1 border-4 font-bold duration-100 border-gray-400 hover:border-gray-100 rounded-full hover:text-gray-100 text-gray-400'
          >
            Download svg
          </button>
          <CopyToClipboard text={copyValue}>
            <button className='hover:bg-gray-400 my-1 mx-auto w-40 text-center py-1 border-4 font-bold duration-100 border-gray-400 hover:border-gray-100 rounded-full hover:text-gray-100 text-gray-400'>
              Copy svg
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default Avatar;

Avatar.prototype = {
  height: Number,
  width: Number,
};

import React, { useContext, useState } from 'react';
import { ColorContext } from '../Context/ColorContext';

function Navbar() {
  const [tabIndex, settabIndex] = useState(0);
  const { pallete, SetPallete } = useContext(ColorContext);
  const baseTabClass =
    'text-center relative z-10 m-0 rounded-full text-sm font-bold inline-block min-w-min pointer py-1 px-3 uppercase mx-1 cursor-pointer ';
  const inactiveTabClass = baseTabClass + 'text-gray-500 ';
  const activeTabClass = baseTabClass + 'bg-white text-gray-700';

  return (
    <div className='justify-center flex items-center py-2 my-20'>
      <div className='border-2 border-indigo-400 rounded-full bg-gray-200 list-none box-border leading-5 py-1 px-1'>
        <div
          className={tabIndex === 0 ? activeTabClass : inactiveTabClass}
          onClick={() => settabIndex(0)}
        >
          firstTab
        </div>
        <div
          className={tabIndex === 1 ? activeTabClass : inactiveTabClass}
          onClick={() => settabIndex(1)}
        >
          secondTab
        </div>
      </div>
      <div className='mx-10 my-auto flex'>
        <p className='w-8 h-8 mr-1' style={{ backgroundColor: pallete[0] }}></p>
        <p className='w-8 h-8 mr-1' style={{ backgroundColor: pallete[1] }}></p>
        <p className='w-8 h-8 mr-1' style={{ backgroundColor: pallete[2] }}></p>
        <p className='w-8 h-8 mr-1' style={{ backgroundColor: pallete[3] }}></p>
      </div>
      <button
        onClick={() => SetPallete()}
        className='px-3 py-2 my-auto font-bold rounded-full text-xs bg-gray-200 uppercase border-2 border-indigo-400'
      >
        random pallete
      </button>
    </div>
  );
}

export default Navbar;

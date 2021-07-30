import React, { useContext, useEffect, useRef, useState } from 'react';
import { AvatarGridContext } from '../Context/AvatarGridContext';
import Avatar from './Avatar';

function AvatarGrid() {
  const { variation } = useContext(AvatarGridContext);

  return (
    <div className='mx-1 sm:mx-2 md:mx-5 lg:mx-20 xl:mx-40'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 '>
        {variation.map((el) => (
          <div
            className='rounded-lg border justify-center mx-auto border relative'
            key={`${el.ear}-${el.bg}-${el.eye}-${el.face}-${el.otl}-${el.mouth}`}
          >
            <Avatar
              width={260}
              height={260}
              bg={el.bg}
              ear={el.ear}
              eye={el.eye}
              face={el.face}
              otl={el.otl}
              mouth={el.mouth}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvatarGrid;

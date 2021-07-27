import React from 'react';
import Avatar from './Avatar';

function AvatarGrid() {
  return (
    <div className='mx-40'>
      <div className='grid grid-cols-5 gap-5'>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
        <div className='rounded-lg border justify-center mx-auto'>
          <Avatar width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default AvatarGrid;

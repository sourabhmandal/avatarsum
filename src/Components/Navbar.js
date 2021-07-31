import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../Context/ColorContext';
import { UserContext } from '../Context/UserContext';

function Navbar({ tabIndex, settabIndex }) {
  const { pallete, SetPallete } = useContext(ColorContext);
  const { user } = useContext(UserContext);
  const handleSavePallete = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = {
      user_id: user.data.id,
      pallete: pallete,
    };

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow',
    };

    fetch(
      `${process.env['REACT_APP_AVATAR_BACKEND_API']}/pallete/${user.data.id}`,
      requestOptions
    )
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  const baseTabClass =
    'text-center relative z-10 m-0 rounded-full text-sm font-bold inline-block min-w-min pointer py-1 px-3 uppercase mx-1 cursor-pointer ';
  const inactiveTabClass = baseTabClass + 'text-gray-500 ';
  const activeTabClass = baseTabClass + 'bg-white text-gray-700';

  return (
    <>
      <div className='lg:flex align-center justify-between mb-10 text-center px-2 lg:px-10 py-1 bg-blue-50 border-b'>
        <div className='flex mx-auto justify-center'>
          <a href='/' className='my-2 font-bold text-3xl text-purple-600 mr-12'>
            AvatarSum
          </a>
          <div className='py-2'>
            <div className='border-2 border-indigo-400 rounded-full bg-gray-200 list-none box-border leading-5 py-1 px-1'>
              <div
                className={tabIndex === 0 ? activeTabClass : inactiveTabClass}
                onClick={() => settabIndex(0)}
              >
                Avatars
              </div>
              <div
                className={tabIndex === 1 ? activeTabClass : inactiveTabClass}
                onClick={() => settabIndex(1)}
              >
                Docs
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='mr-5 my-2 flex'>
            <p
              className='w-8 h-8 mr-1'
              style={{ backgroundColor: pallete[0] }}
            ></p>
            <p
              className='w-8 h-8 mr-1'
              style={{ backgroundColor: pallete[1] }}
            ></p>
            <p
              className='w-8 h-8 mr-1'
              style={{ backgroundColor: pallete[2] }}
            ></p>
            <p
              className='w-8 h-8 mr-1'
              style={{ backgroundColor: pallete[3] }}
            ></p>
            <p
              className='w-8 h-8 mr-1'
              style={{ backgroundColor: pallete[4] }}
            ></p>
          </div>
          <button
            onClick={() => SetPallete()}
            className='hover:bg-purple-400 active:bg-purple-500 hover:text-gray-50 px-3 py-2 my-2 font-bold rounded-full text-xs bg-gray-100 uppercase border-2 border-indigo-400'
          >
            random pallete
          </button>
          <SignedIn>
            <button
              onClick={() => handleSavePallete()}
              className='hover:bg-purple-400 active:bg-purple-500 hover:text-gray-50 ml-2 px-3 py-2 my-2 font-bold rounded-full text-xs bg-gray-100 uppercase border-2 border-indigo-400'
            >
              save
            </button>
          </SignedIn>
          <SignedOut>
            <button
              onClick={() => {}}
              disabled={true}
              className='ml-2 px-3 py-2 my-2 font-bold rounded-full text-gray-400 text-xs bg-gray-200 uppercase border-2 border-gray-400'
            >
              save
            </button>
          </SignedOut>
        </div>
        <div className='flex mx-auto justify-center'>
          <SignedIn>
            <button
              onClick={() => {
                window.location = `/collection/${user.data.id}`;
              }}
              className='bg-green-500 hover:bg-green-600 active:bg-green-700 text-gray-50 ml-2 my-2 font-bold rounded-full text-xs bg-gray-100 uppercase border-2 border-green-700'
            >
              <p className='px-3 py-2'>Collection</p>
            </button>
          </SignedIn>
          <SignedOut>
            <button
              disabled={true}
              onClick={() => {}}
              className='ml-2 my-2 font-bold text-gray-400 rounded-full text-xs bg-gray-200 uppercase border-2 border-gray-400'
            >
              <p className='px-3 py-2'>Collection</p>
            </button>
          </SignedOut>

          <SignedIn>
            <div className='my-auto ml-2 font-bold rounded-full text-xs bg-gray-200 uppercase border-2 border-indigo-400'>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <button
              onClick={() => (window.location = '/accounts')}
              className='my-2 font-bold rounded-full text-xs bg-gray-100 uppercase border-2 border-indigo-400'
            >
              <p className='px-3 py-2'>Login</p>
            </button>
          </SignedOut>
        </div>
      </div>
    </>
  );
}

export default Navbar;

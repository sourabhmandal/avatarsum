import { useUser } from '@clerk/clerk-react';
import React from 'react';

function UserBasedButton({ name, onClick }) {
  const { user } = useUser();
  return user ? (
    <button
      onClick={onClick}
      className='px-3 py-2 my-auto font-bold rounded-full text-xs bg-gray-200 uppercase border-2 border-indigo-400'
    >
      {name}
    </button>
  ) : (
    <button
      disabled={true}
      onClick={() => {}}
      className='px-3 py-2 my-auto font-bold rounded-full text-xs bg-gray-200 uppercase border-2 border-indigo-400'
    >
      {name}
    </button>
  );
}

export default UserBasedButton;

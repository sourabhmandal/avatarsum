import { useUser, withUser } from '@clerk/clerk-react';
import { UserContext } from '../Context/UserContext';
import React, { useContext } from 'react';
import { WithUser } from '@clerk/clerk-react';

function SaveUserInContext() {
  const { setUser } = useContext(UserContext);
  // setUser(user);
  // console.log(user);
  return <WithUser>{(user) => setUser(user)}</WithUser>;
}

export default SaveUserInContext;

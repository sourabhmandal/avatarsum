import React from 'react';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import SaveUserInContext from '../Components/SaveUserInContext';
import UserProvider from '../Context/UserContext';

function AccountsPage() {
  return (
    <>
      <SignedIn></SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default AccountsPage;

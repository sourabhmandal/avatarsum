import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DocsPage from './Pages/DocsPage';
import CollectionPage from './Pages/CollectionPage';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import UserProvider from './Context/UserContext';
import SaveUserInContext from './Components/SaveUserInContext';
import ColorProvider from './Context/ColorContext';
import AvatarGridProvider from './Context/AvatarGridContext';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import AvatarGrid from './Components/AvatarGrid';

function App() {
  const [tabIndex, settabIndex] = useState(0);

  return (
    <ClerkProvider frontendApi={process.env['REACT_APP_CLERK_FRONTEND_API']}>
      <UserProvider>
        <ColorProvider>
          <AvatarGridProvider>
            <Navbar tabIndex={tabIndex} settabIndex={settabIndex} />

            <SignedIn>
              <SaveUserInContext />
            </SignedIn>

            <Router>
              <Switch>
                <Route
                  path='/collection/:id'
                  component={tabIndex === 0 ? CollectionPage : DocsPage}
                />
                <Route path='/accounts'>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </Route>
                <Route
                  path='/'
                  component={tabIndex === 0 ? AvatarGrid : DocsPage}
                />
              </Switch>
            </Router>
            <Footer />
          </AvatarGridProvider>
        </ColorProvider>
      </UserProvider>
    </ClerkProvider>
  );
}

export default App;

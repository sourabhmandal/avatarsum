import AvatarGrid from './Components/AvatarGrid';
import Navbar from './Components/Navbar';
import ColorProvider from './Context/ColorContext';

function App() {
  return (
    <ColorProvider>
      <Navbar />
      <AvatarGrid />
    </ColorProvider>
  );
}

export default App;

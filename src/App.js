import Navbar from './Components/Navbar';
import ColorProvider from './Context/ColorContext';

function App() {
  return (
    <ColorProvider>
      <Navbar />
    </ColorProvider>
  );
}

export default App;

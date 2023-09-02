

import './App.css';
import { ModalProvider } from './Contex/ModalContext';
import Home from './Pages/Shared/Home';



function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Home></Home>
      </ModalProvider>

    </div>
  );
}

export default App;

import './App.css';
import './styles/tailwind.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home'
import EditorPage from './pages/EditorPage';


function App() {
  return (
    <>
    <div>
      <Toaster position='top-center' toastOptions={{success:{
        theme:{
          primary:'var(--green)',
        }
      }}}>
        
      </Toaster>
    </div>


    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/editor/:roomId' element={<EditorPage />}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PlayersInfo from './components/PlayersInfo';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Home/>}></Route>
      <Route path='/PlayersInfo' element={<PlayersInfo/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

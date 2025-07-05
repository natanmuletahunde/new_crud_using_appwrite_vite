import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import Notes from './pages/Notes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/login' element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

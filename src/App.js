import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import SearchResult from './Pages/SearchResult/SearchResult';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;

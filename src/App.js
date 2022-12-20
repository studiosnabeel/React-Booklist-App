import { Route, Routes } from 'react-router-dom';
import Navigate from './components/Navigate';
import Home from './pages/Home';
import Categories from './pages/Categories';

const App = () => (
  <>
    <Navigate />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;

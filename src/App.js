import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Navigate from './components/Navigate';
import Categories from './pages/Categories';
import Home from './pages/Home';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Navigate />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Provider>
);

export default App;

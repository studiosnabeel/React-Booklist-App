import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route
            path="/categories"
            element={(
              <div className="container">
                <Categories />
              </div>
            )}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

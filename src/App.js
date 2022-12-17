import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <div>
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

import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import GlobalStyle from '../globalStyles';
import Categories from '../Categories';
import Bookshelf from '../Bookshelf';

const BookstoreApp = () => (
  <div className="App">
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<Bookshelf />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default BookstoreApp;

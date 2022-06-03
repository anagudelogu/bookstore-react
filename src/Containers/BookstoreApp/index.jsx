import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import GlobalStyle from '../globalStyles';
import Categories from '../Categories';

const BookstoreApp = () => (
  <div className="App">
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default BookstoreApp;

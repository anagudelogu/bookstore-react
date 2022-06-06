import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookstoreApp from './Containers/BookstoreApp';
import './index.css';
import Navbar from './Containers/Navbar';
import Categories from './Containers/Categories';
import GlobalStyle from './Containers/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookstoreApp />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

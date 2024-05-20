import React, { useEffect } from 'react';

import logo from './assets/logo.png';

import { useDispatch } from 'react-redux';

import { addRandomProducts } from './redux/actions';

import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const count = Math.floor(Math.random() * 6) + 10;
    dispatch(addRandomProducts(count));
  }, [dispatch]);

  return (
    <div className="container">
      <header className="d-flex mt-5 mb-3">
        <div className="flex-row align-items-center d-flex">
          <img src={logo} alt="Shopping List Logo" />
          <h1 className="mb-0 ms-4">Shopping List</h1>
        </div>
      </header>
      <ProductList />
      <AddProduct />
    </div>
  );
};

export default App;

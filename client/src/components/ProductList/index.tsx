import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers';

import ProductForm from '../ProductForm';
import Product from '../../models/Product';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <>
      <div className="row mb-3">
        <div className="col-6 col-sm-8 col-md-9"><b>Name</b></div>
        <div className="col-4 col-sm-3 col-md-2"><b>Amount</b></div>
      </div>
      <div className="row">
        {products.map((product: Product) => (
          <ProductForm key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;

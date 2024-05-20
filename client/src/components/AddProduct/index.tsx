import React from 'react';

import AddProductForm from '../AddProductForm';

const AddProduct: React.FC = () => {
  return (
    <div className="mt-5">
      <div className="row mb-3">
        <div className="col"><b>Add New Products</b></div>
      </div>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;

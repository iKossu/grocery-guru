import React from 'react';

import useProductForm from '../../hooks/useProductForm';
import { Product } from '../../models/Product';

interface ProductItemProps {
    product: Product;
};

const ProductForm: React.FC<ProductItemProps> = ({ product }) => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleChange,
  } = useProductForm(product);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row mb-3">
        <div className="col-6 col-sm-8 col-md-9">
          <input className="form-control"
            type="text"
            placeholder="name"
            {...register('name', { required: 'Name is required.' })}
            onBlur={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
        </div>
        <div className="col-4 col-sm-3 col-md-2">
          <input className="form-control"
            type="number"
            placeholder="amount"
            {...register('amount', { required: 'Amount must be ≥ 1.', min: 1 })}
            onBlur={handleChange}
            aria-invalid={errors.amount ? 'true' : 'false'}
          />
        </div>
        <div className="col-2 col-sm-1">
          <button type="submit" className="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;

import React from 'react';

import useAddProductForm from '../../hooks/useAddProductForm';

const AddProductForm: React.FC = () => {
  const { register, handleSubmit, errors, onSubmit } = useAddProductForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row mb-3">
        <div className="col-6 col-sm-8 col-md-9">
          <input
            type="text"
            className="form-control"
            placeholder="name"
            {...register('name', { required: 'Name is required.' })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          <p role="alert">{errors.name?.message}</p>
        </div>
        <div className="col-4 col-sm-3 col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="amount"
            {...register('amount', { required: 'Amount must be ≥ 1.', min: 1 })}
            aria-invalid={errors.amount ? 'true' : 'false'}
          />
          <p role="alert">{errors.amount?.message}</p>
        </div>
        <div className="col-2 col-sm-1">
          <button type="submit" className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
              <path d="M11 2H9v3h2z" />
              <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;

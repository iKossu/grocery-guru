import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { deleteProduct } from '../redux/actions';

import Product from '../models/Product';

interface FormData {
  name: string;
  amount: string;
};

const useProductForm = (product: Product) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('amount', product.amount.toString());
    }
  }, [product, setValue]);

  const onSubmit = () => {
    dispatch(deleteProduct(product.id));
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useProductForm;

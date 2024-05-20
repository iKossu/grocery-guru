import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { updateProduct, deleteProduct } from '../redux/actions';

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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    dispatch(updateProduct({ ...product, [name]: value }));
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleChange,
  };
};

export default useProductForm;

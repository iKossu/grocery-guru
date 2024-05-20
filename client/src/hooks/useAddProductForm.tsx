import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { createProduct } from '../redux/actions';

interface FormData {
  name: string;
  amount: string;
};

const useAddProductForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { name, amount } = data;

    dispatch(createProduct({ name, amount: parseInt(amount, 10) }));
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useAddProductForm;

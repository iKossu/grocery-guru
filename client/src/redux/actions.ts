import { createAction } from '@reduxjs/toolkit';

import { Product } from '../models/Product';

export const createProduct = createAction<Partial<Product>>('CREATE_PRODUCT');
export const updateProduct = createAction<Product>('UPDATE_PRODUCT');
export const deleteProduct = createAction<number>('DELETE_PRODUCT');
export const addRandomProducts = createAction<number>('ADD_RANDOM_PRODUCTS');

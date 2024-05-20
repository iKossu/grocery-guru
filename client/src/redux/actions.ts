import { createAction } from '@reduxjs/toolkit';

import { Product } from '../models/Product';

export const deleteProduct = createAction<number>('DELETE_PRODUCT');
export const addRandomProducts = createAction<number>('ADD_RANDOM_PRODUCTS');

import { createReducer } from '@reduxjs/toolkit';

import {
  deleteProduct,
  addRandomProducts,
} from './actions';
import Product from '../models/Product';

export interface RootState {
  products: Product[];
}

const initialState: RootState = {
  products: [],
};

let nextProductId = 1;

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteProduct, (state: RootState, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    })
    .addCase(addRandomProducts, (state: RootState, action) => {
      state.products = Array.from({ length: action.payload }, () => {
        const id = nextProductId;
        nextProductId++;

        return {
          id,
          name: `Product ${Math.random().toString(16).substring(2, 8)}`,
          amount: Math.ceil(Math.random() * 10),
        };
      });
    });
});

export default rootReducer;

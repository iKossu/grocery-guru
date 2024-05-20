export interface Product {
  id: number;
  name: string;
  amount: number;
}

class ProductModel implements Product {
  id: number;
  name: string;
  amount: number;

  constructor(id: number, name: string, amount: number) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }
}

export default ProductModel;

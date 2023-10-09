export default class Product {
  constructor(id, name, price, origin, inStock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.origin = origin;
    this.inStock = inStock;
  }

  static getEmptyProduct = () => {
    return new Product("", "", 0, "", false);
  }
}

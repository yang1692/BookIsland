export class  Book {
  id: number;
  name: string;
  image: string;
  sale_price: number;
  rent_price: number;
  language: string;
  publisher: string;
  author: string;
  sales: number;
  type: string;
  isbn: string;
  sales_in_stock: number;
  rent_in_stock: number;
  weight: number;
  height: number;
  width: number;
  length: number;
  constructor(b: any) {
    this.id = b.id || -1;
    this.name = b.name || '';
    this.image = b.image || '';
    this.sale_price = b.sale_price || 0;
    this.rent_price = b.rent_price || 0;
    this.language = b.language || '';
    this.publisher = b.publisher || '';
    this.author = b.author || '';
    this.sales = b.sales || 0;
    this.type = b.type || '';
    this.isbn = b.isbn || '';
    this.sales_in_stock = b.sales_in_stock || 0;
    this.rent_in_stock = b.rent_in_stock || 0;
    this.weight = b.weight || 0;
    this.height = b.height || 0;
    this.width = b.width || 0;
    this.length = b.length || 0;
  }
}

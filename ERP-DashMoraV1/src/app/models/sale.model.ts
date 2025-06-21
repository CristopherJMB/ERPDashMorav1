import { Product } from "./product.model";

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Sale{
  id: number;
  client: Client;
  date: Date;
  total: number;
  products: Product[];
}

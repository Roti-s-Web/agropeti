import { IconType } from "react-icons";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subcategory: string;
  inStock: boolean;
  featured?: boolean;
  discount?: number;
  specifications?: { [key: string]: string };
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
  icon: IconType;
}

export interface Subcategory {
  id: string;
  name: string;
  icon: IconType;
}

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

import { IconType } from "react-icons";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isAdmin: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    isAdmin: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean;
  }
}

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
  createdAt?: Date;
  updatedAt?: Date;
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
  name?: string;
  isAdmin: boolean;
}

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

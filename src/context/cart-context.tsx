'use client';

import { Product } from '@/payload-types';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ICardProps {
  cartState: Product[];
  onAddProduct?: (product: Product) => void;
  onRemoveProduct?: (index: number) => void;
}

const CartContext = createContext<ICardProps>({
  cartState: [],
});

export const useCart = () => useContext(CartContext);

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartState, setCartState] = useState<Product[]>([]);

  useEffect(() => {
    const localStorageCart = localStorage.getItem('cart');
    if (!localStorageCart) {
      return;
    }

    setCartState(JSON.parse(localStorageCart) as Product[]);
  }, []);

  const onAddProduct = (product: Product) => {
    const cart = [...cartState, product];
    setCartState(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const onRemoveProduct = (index: number) => {
    const cart = [...cartState];
    cart.splice(index, 1);
    setCartState(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const value: ICardProps = {
    cartState,
    onAddProduct,
    onRemoveProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

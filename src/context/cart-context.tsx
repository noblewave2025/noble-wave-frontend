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
  onRemoveProduct?: (id: Product['id']) => void;
}

const CartContext = createContext<ICardProps>({
  cartState: [],
});

export const useCart = () => useContext(CartContext);

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartState, setCartState] = useState<Product[]>([]);

  useEffect(() => {
    // получение из localStorage и запись в cartState
  }, []);

  const onAddProduct = (product: Product) => {
    setCartState([...cartState, product]);
    // тут localStorage
  };

  const onRemoveProduct = (id: Product['id']) => {
    setCartState(cartState.filter((product) => product.id !== id));
    // тут localStorage
  };

  const value: ICardProps = {
    cartState,
    onAddProduct,
    onRemoveProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

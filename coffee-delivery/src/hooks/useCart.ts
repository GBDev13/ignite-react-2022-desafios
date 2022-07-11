import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

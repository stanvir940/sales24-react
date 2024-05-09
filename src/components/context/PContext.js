import React, { useContext } from "react";

export const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

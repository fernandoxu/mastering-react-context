import { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const useStore = () => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: useCallback(() => setUser('xls'), []),
    logout: useCallback(() => setUser(null), []),
    addToCart: useCallback(() => setCartCount((v) => v + 1), []),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
);

export const useLogin = () => useContextSelector(StoreContext, (v) => v.login);
export const useLogout = () =>
  useContextSelector(StoreContext, (v) => v.logout);
export const useUser = () => useContextSelector(StoreContext, (v) => v.user);
export const useAddToCart = () =>
  useContextSelector(StoreContext, (v) => v.addToCart);
export const useCartCount = () =>
  useContextSelector(StoreContext, (v) => v.cartCount);

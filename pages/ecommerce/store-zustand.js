import create from 'zustand';

const useStore = create((set) => ({
  user: null,
  cartCount: 0,
  login: () => set(() => ({ user: 'xls' })),
  logout: () => set(() => ({ user: null })),
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));

export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);
export const useUser = () => useStore((state) => state.user);
export const useAddToCart = () => useStore((state) => state.addToCart);
export const useCartCount = () => useStore((state) => state.cartCount);

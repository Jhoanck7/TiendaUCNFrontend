import { create } from "zustand";

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      // si ya existe, aumentamos cantidad
      const exists = state.items.find((it) => it.id === item.id);
      if (exists) {
        return {
          items: state.items.map((it) =>
            it.id === item.id ? { ...it, quantity: it.quantity + item.quantity } : it
          ),
        };
      }
      return { items: [...state.items, item] };
    }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((it) => it.id !== id) })),
  clearCart: () => set({ items: [] }),
}));

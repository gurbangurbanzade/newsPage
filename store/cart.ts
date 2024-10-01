import { IProducts } from "@/types/type";
import { create } from "zustand";
interface ICartItem {
  count: number;
  id: string;
}

// Zustand store type
export type Store = {
  customCart: ICartItem[];
  customFav: string[];
  color: boolean;
  colorId: string;
  size: boolean;
  sizeId: string;
  category: boolean;
  categoryId: string;

  setFields: (fields: Partial<Store>) => void;
  setClose: () => void;
};

const initialValue = {
  customCart: [],
  customFav: [],
  color: false,
  colorId: "",
  size: false,
  sizeId: "",
  category: false,
  categoryId: "",
};

// Initial state
const initialState: Store = {
  ...initialValue,
  setFields: () => {},
  setClose: () => {},
};

export const useStore = create<Store>((set) => ({
  ...initialState,
  setFields: (fields) => set((state) => ({ ...state, ...fields })),
  setClose: () => set(() => ({ ...initialValue })),
}));

import { create } from "zustand";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
export const useDialogStore = create<Props>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("Opening dialog");
    set({ isOpen: true });
  },
  onClose: () => {
    console.log("Closing dialog");
    set({ isOpen: false });
  },
}));

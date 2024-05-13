import { create } from "zustand";

type SettingsStore = {
  isOpen: Boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));


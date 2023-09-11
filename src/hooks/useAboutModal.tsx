"use client";

import { create } from "zustand";


interface AboutModalStore {
    isOpened: boolean;
    setIsOpened: () => void;
}

const useAboutModal = create<AboutModalStore>((set) => ({
    isOpened: false,
    setIsOpened: () => set((state) => ({ isOpened: !state.isOpened })),
}));

export default useAboutModal;

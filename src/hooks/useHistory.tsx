"use client"

import { create } from "zustand";


export interface HistoryType {
    expression: string
    result: string
}

interface HistoryStore {
    history: HistoryType[]
    setHistory: (history: HistoryType[]) => void
}

const useHistory = create<HistoryStore>((set) => ({
    history: [],
    setHistory: (history: HistoryType[]) => set({ history }),
}))
 
export default useHistory;

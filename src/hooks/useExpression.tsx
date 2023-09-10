"use client"

import { IconType } from "react-icons"
import { create } from "zustand"


interface ExpressionStore {
    expression: IconType[]
    setExpression: (value: IconType[]) => void
    expString: string
    setExpString: (value: string) => void
}

const useExpression = create<ExpressionStore>((set) => ({
    expression: [],
    setExpression: (value: IconType[]) => set({ expression: value }),
    expString: "",
    setExpString: (value: string) => set({ expString: value })
}))

export default useExpression

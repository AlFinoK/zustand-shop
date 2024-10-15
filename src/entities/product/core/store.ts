import { create } from 'zustand'

export type Product = {
	id: number
	title: string
	category: string
	price: number
	image: string
}

type State = {
	products: Product[]
}

type Actions = {
	removeProduct: (id: number) => void
	removeAllProducts: () => void
	setProducts: (products: Product[]) => void
}

export const useProductStore = create<State & Actions>((set, get) => ({
	products: [],

	removeProduct: (id: number) =>
		set(() => ({
			products: get().products.filter((product) => product.id !== id),
		})),

	setProducts: (products) => set({ products }),

	removeAllProducts: () => set({ products: [] }),
}))

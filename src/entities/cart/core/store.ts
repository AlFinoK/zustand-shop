import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Product } from '@/entities/product'

export type CartState = {
	cart: Product[]
}

type CartActions = {
	addToCart: (product: Product) => void
	removeFromCart: (id: number) => void
	clearCart: () => void
}

export const useCartStore = create<CartState & CartActions>()(
	persist(
		(set) => ({
			cart: [],

			addToCart: (product: Product) =>
				set((state) => ({
					cart: [...state.cart, product],
				})),

			removeFromCart: (id: number) =>
				set((state) => ({
					cart: state.cart.filter((product) => product.id !== id),
				})),

			clearCart: () => set({ cart: [] }),
		}),
		{
			name: 'cart-storage',
			getStorage: () => localStorage,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} as any,
	),
)

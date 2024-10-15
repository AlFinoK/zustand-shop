import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Product } from '@/entities/product'

export type CartState = {
	cart: { product: Product; quantity: number }[]
}

type CartActions = {
	addToCart: (product: Product) => void
	removeFromCart: (id: number) => void
	clearCart: () => void
}

export const useCartStore = create<CartState & CartActions>()(
	persist(
		(set) => ({
			cart: [] as { product: Product; quantity: number }[],

			addToCart: (product: Product) =>
				set((state) => {
					const existingProduct = state.cart.find((item) => item.product.id === product.id)

					if (existingProduct) {
						return {
							cart: state.cart.map((item) =>
								item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
							),
						}
					} else {
						return {
							cart: [...state.cart, { product, quantity: 1 }],
						}
					}
				}),

			removeFromCart: (id: number) =>
				set((state) => ({
					cart: state.cart.filter((item) => item.product.id !== id),
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

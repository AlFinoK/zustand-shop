import { useCartStore } from '../core'

export const useCartTotal = () => {
	const { cart } = useCartStore()

	const totalPrice = cart.reduce((total, product) => total + product.price, 0)

	return totalPrice
}

import { useCartStore } from '../core'

export const useCartTotal = () => {
	const { cart } = useCartStore()

	const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0)

	return totalPrice
}

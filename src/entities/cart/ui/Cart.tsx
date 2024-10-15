'use client'

import { Button } from 'antd'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import { useCartStore } from '../core'
import { useCartTotal } from '../hooks/useCartTotal'

type CartProps = {
	model: 'default' | 'full'
}

export const Cart = ({ model }: CartProps) => {
	const { cart, clearCart } = useCartStore()
	const totalPrice = useCartTotal()

	if (model === 'default') {
		return (
			<div className={'flex justify-center pt-5'}>
				<ShoppingCartOutlined style={{ fontSize: 24, position: 'relative' }} />
				<span className={'absolute top-6 right-5 bg-white text-blue-700 rounded-full px-2 w-30 h-30'}>
					{cart.length}
				</span>
			</div>
		)
	}

	return (
		<>
			<h3 className={'text-2xl mb-4 uppercase'}>Cart</h3>
			{cart.length === 0 && <p className={'text-xl uppercase text-center text-red-400'}>Cart is empty</p>}
			<CartList />
			<div className="flex flex-col gap-5 mt-4 text-right text-lg font-semibold">
				<div>
					<span>Total: </span>
					<span className={'text-green-400'}>${totalPrice.toFixed(2)}</span>
				</div>
				{cart.length > 0 && (
					<Button
						className="bg-blue-500 text-white rounded px-4 py-5"
						type="primary"
						onClick={clearCart}>
						Clear cart
					</Button>
				)}
			</div>
		</>
	)
}
const CartList = () => {
	const { cart, removeFromCart } = useCartStore()

	return (
		<ul className={'flex flex-col gap-3'}>
			{cart.map((item) => (
				<div
					key={item.product.id}
					className={'flex items-center justify-between gap-3'}>
					<CartItem
						title={item.product.title}
						price={item.product.price}
						quantity={item.quantity}
					/>
					<Button
						className={'bg-red-500 text-white rounded-full p-2 border-none'}
						size={'small'}
						onClick={() => removeFromCart(item.product.id)}>
						<DeleteOutlined />
					</Button>
				</div>
			))}
		</ul>
	)
}

type CartItemProps = {
	title: string
	price: number
	quantity: number
}

const CartItem = ({ title, price, quantity }: CartItemProps) => {
	return (
		<li className="flex justify-between items-center w-full">
			<span className={'w-[150px] inline-block'}>
				{title} (x{quantity})
			</span>
			<span className={'text-green-400'}>${(price * quantity).toFixed(2)}</span>
		</li>
	)
}

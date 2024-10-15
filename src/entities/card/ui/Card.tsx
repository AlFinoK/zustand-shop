import { Button, Image } from 'antd'
import { useCartStore } from '@/entities/cart'
import { Product } from '@/entities/product'

export const Card = ({ product }: { product: Product }) => {
	const { addToCart } = useCartStore()

	return (
		<div
			key={product.id}
			className="bg-white border rounded-lg p-4 flex flex-col justify-between h-[350px] w-[350px]  ">
			<div className="flex flex-col gap-3 items-center">
				<Image
					src={product.image}
					alt={product.title}
					width={120}
					height={120}
				/>
				<h3 className="text-md font-semibold text-center">{product.title}</h3>
				<p className="text-gray-500 text-center">{product.category}</p>
				<p className="text-lg font-bold text-center">${product.price}</p>
			</div>
			<div className="flex justify-center">
				<Button
					className="bg-blue-500 text-white rounded px-4 py-5"
					onClick={() => addToCart(product)}>
					Add to Cart
				</Button>
			</div>
		</div>
	)
}

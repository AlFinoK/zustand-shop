import { useState } from 'react'
import { Pagination } from 'antd'

import { Card } from '@/entities/card'
import { Product } from '@/entities/product'
import { useFilterStore } from '@/entities/filters/core'

type PaginatedListProps = {
	pageSize: number
	products: Product[]
}

export function PaginatedList({ pageSize, products }: PaginatedListProps) {
	const [pageIndex, setPageIndex] = useState(1)
	const { category, priceRange, search, priceSort } = useFilterStore()

	const filteredProducts = products
		.filter((product) => (category ? product.category === category : true))
		.filter((product) => (priceRange ? product.price >= priceRange[0] && product.price <= priceRange[1] : true))
		.filter((product) => (search ? product.title.toLowerCase().includes(search.toLowerCase()) : true))

	const sortedProducts = filteredProducts.sort((a, b) => {
		if (priceSort === 'lowest') {
			return a.price - b.price
		} else if (priceSort === 'highest') {
			return b.price - a.price
		} else {
			return 0
		}
	})

	const startIndex = (pageIndex - 1) * pageSize
	const paginatedProducts = sortedProducts.slice(startIndex, startIndex + pageSize)

	const handleChangePage = (page: number) => {
		setPageIndex(page)
	}

	return (
		<div>
			<div className="flex flex-wrap justify-center mb-5 gap-5">
				{paginatedProducts.map((product) => (
					<Card
						product={product}
						key={product.id}
					/>
				))}
			</div>
			<Pagination
				current={pageIndex}
				pageSize={pageSize}
				total={sortedProducts.length}
				onChange={handleChangePage}
				className="w-full flex justify-center"
			/>
		</div>
	)
}

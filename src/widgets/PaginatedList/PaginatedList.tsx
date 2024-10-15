'use client'

import { useState } from 'react'
import { Pagination } from 'antd'
import { Card } from '@/entities/card'
import { Product } from '@/entities/product'

type PaginatedListProps = {
	pageSize: number
	products: Product[]
}

export function PaginatedList({ pageSize, products }: PaginatedListProps) {
	const [pageIndex, setPageIndex] = useState(1)

	const startIndex = (pageIndex - 1) * pageSize
	const paginatedProducts = products.slice(startIndex, startIndex + pageSize)

	const handleChangePage = (page: number) => {
		setPageIndex(page)
	}

	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 gap-5">
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
				total={products.length}
				onChange={handleChangePage}
				className="w-full flex justify-center"
			/>
		</div>
	)
}

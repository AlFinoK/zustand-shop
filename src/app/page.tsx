'use client'

import { Button, Layout, Spin } from 'antd'
import { Sidebar } from '@/widgets/Sidebar'
import { useState, useEffect } from 'react'
import { PaginatedList } from '@/widgets/PaginatedList'
import { useProducts } from '@/entities/product/hooks/useProducts'
import { CategoryFilter, PriceFilter, SearchFilter } from '@/entities/filters'

const { Content } = Layout

export default function Home() {
	const { products, error, isLoading, mutate } = useProducts()
	const [isClient, setIsClient] = useState(false)

	const categories = Array.from(new Set(products.map((product) => product.category)))

	const handleReload = async () => {
		await mutate()
	}

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<Layout className="min-h-screen">
			{!isClient ? (
				<div className="flex justify-center items-center min-h-screen text-2xl">
					<h2>Loading page...</h2>
				</div>
			) : (
				<Layout>
					<Layout>
						<Content className="p-5 md:p-10">
							<div className="flex flex-col gap-5 h-full">
								<div className="customBg flex flex-col lg:flex-row items-center justify-between p-5 gap-5">
									<span className="shop-title">Shop</span>
									<div className="flex flex-col xl:flex-row gap-3 items-center">
										<PriceFilter />
										<CategoryFilter categories={categories} />
										<SearchFilter />
									</div>
								</div>
								{error && (
									<div className="flex flex-col justify-center items-center gap-4 h-screen">
										<h3 className="error-message">Error loading products.</h3>
										<Button
											size="large"
											type={'primary'}
											onClick={handleReload}>
											Reload
										</Button>
									</div>
								)}
								{isLoading ? (
									<Spin className="m-auto" />
								) : (
									<PaginatedList
										products={products}
										pageSize={10}
									/>
								)}
							</div>
						</Content>
					</Layout>
					<Sidebar />
				</Layout>
			)}
		</Layout>
	)
}

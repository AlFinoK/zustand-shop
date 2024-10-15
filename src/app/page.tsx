'use client'

import { Button, Layout, Spin } from 'antd'
import { Sidebar } from '@/widgets/Sidebar'
import { PaginatedList } from '@/widgets/PaginatedList'
import { useProducts } from '@/entities/product/hooks/useProducts'
import { CategoryFilter, PriceFilter, SearchFilter } from '@/entities/filters'

const { Content } = Layout

export default function Home() {
	const { products, error, isLoading } = useProducts()

	if (error)
		return (
			<div className={'flex flex-col justify-center items-center gap-4 h-screen'}>
				<h3 className={'text-red-600 text-4xl uppercase'}>Error loading products.</h3>
				<Button
					size={'large'}
					className="bg-blue-500 text-white rounded px-8 py-2"
					onClick={() => window.location.reload()}>
					Reload
				</Button>
			</div>
		)

	return (
		<Layout className="min-h-screen">
			<Layout>
				<Layout>
					<Content className={'p-10'}>
						<div className="flex flex-col gap-5 h-full">
							<div className={'customBg flex items-center justify-between p-5'}>
								<span className={'text-4xl uppercase'}>Shop</span>
								<div className={'flex gap-3 items-center'}>
									<PriceFilter />
									<CategoryFilter />
									<SearchFilter />
								</div>
							</div>
							{isLoading ? (
								<Spin
									className={'m-auto'}
									tip={'Spining...'}
								/>
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
		</Layout>
	)
}

import useSWR from 'swr'
import { useEffect } from 'react'

import { useProductStore } from '@/entities/product'
import { apiURL, fetchProducts } from '@/shared/api/products'

export const useProducts = () => {
	const { setProducts } = useProductStore()
	const { data, error } = useSWR(`${apiURL}products`, fetchProducts)

	useEffect(() => {
		if (data && Array.isArray(data) && data.length > 0) {
			setProducts(data)
		}
	}, [data, setProducts])

	return {
		products: Array.isArray(data) ? data : [],
		error,
		isLoading: !error && !data,
	}
}

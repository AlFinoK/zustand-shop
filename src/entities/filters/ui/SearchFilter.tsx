import Search from 'antd/es/input/Search'
import { useEffect, useState } from 'react'

import { useFilterStore } from '../core'

export const SearchFilter = () => {
	const { setSearch } = useFilterStore()
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			setSearch(searchValue)
		}, 300)

		return () => clearTimeout(delayDebounceFn)
	}, [searchValue, setSearch])

	return (
		<Search
			className={'w-[250px]'}
			placeholder="Search"
			value={searchValue}
			onChange={(e) => setSearchValue(e.target.value)}
			allowClear
		/>
	)
}

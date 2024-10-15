import { Select } from 'antd'

import { useFilterStore } from '../core'

export const PriceFilter = () => {
	const { setPriceSort } = useFilterStore()

	const handlePriceChange = (value: string | null) => {
		setPriceSort(value as 'lowest' | 'highest')
	}

	return (
		<Select
			placeholder="Sort by price"
			optionFilterProp="label"
			onChange={handlePriceChange}
			options={[
				{ value: null, label: 'All' },
				{ value: 'lowest', label: 'Lowest' },
				{ value: 'highest', label: 'Highest' },
			]}
		/>
	)
}

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
				{ value: null, label: 'all' },
				{ value: 'lowest', label: 'lowest' },
				{ value: 'highest', label: 'highest' },
			]}
			style={{ minWidth: 120 }}
		/>
	)
}

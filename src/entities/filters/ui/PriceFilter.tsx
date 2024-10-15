import { Select } from 'antd'

import { useFilterStore } from '@/entities/filters'

export const PriceFilter = () => {
	const { setPriceSort } = useFilterStore()

	return (
		<Select
			placeholder="Sort by price"
			optionFilterProp="label"
			onChange={(value) => setPriceSort(value)}
			options={[
				{
					value: 'lowest',
					label: 'Lowest',
				},
				{
					value: 'highest',
					label: 'Highest',
				},
			]}
		/>
	)
}

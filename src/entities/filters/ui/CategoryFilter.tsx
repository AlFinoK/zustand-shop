import { Select } from 'antd'

import { useFilterStore } from '../core'

type CategoryFilterProps = {
	categories: string[]
}

export const CategoryFilter = ({ categories }: CategoryFilterProps) => {
	const { setCategory } = useFilterStore()

	const handleCategoryChange = (value: string | null) => {
		setCategory(value)
	}

	const options = [
		{ value: null, label: 'all' },
		...categories.map((category) => ({
			value: category,
			label: category,
		})),
	]

	return (
		<Select
			placeholder="Sort by category"
			optionFilterProp="label"
			onChange={handleCategoryChange}
			options={options}
			style={{ minWidth: 120 }}
		/>
	)
}

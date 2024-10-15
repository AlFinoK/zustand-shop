import { Select } from 'antd'
import { useFilterStore } from '../core'

type CategoryFilterProps = {
	categories: string[]
}

export const CategoryFilter = ({ categories }: CategoryFilterProps) => {
	const { setCategory } = useFilterStore()

	const handleCategoryChange = (value: string) => {
		setCategory(value)
	}

	return (
		<Select
			placeholder="Sort by category"
			optionFilterProp="label"
			onChange={handleCategoryChange}
			options={categories.map((category) => ({
				value: category,
				label: category,
			}))}
		/>
	)
}

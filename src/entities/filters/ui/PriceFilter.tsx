import { Select } from 'antd'

export const PriceFilter = () => {
	return (
		<Select
			placeholder="Sort by price"
			optionFilterProp="label"
			onChange={() => {}}
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

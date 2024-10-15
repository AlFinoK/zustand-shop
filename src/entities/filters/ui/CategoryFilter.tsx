import { Select } from 'antd'

export const CategoryFilter = () => {
	return (
		<Select
			placeholder="Sort by category"
			optionFilterProp="label"
			onChange={() => {}}
			options={[
				{
					value: 'jack',
					label: 'Jack',
				},
				{
					value: 'lucy',
					label: 'Lucy',
				},
				{
					value: 'tom',
					label: 'Tom',
				},
			]}
		/>
	)
}

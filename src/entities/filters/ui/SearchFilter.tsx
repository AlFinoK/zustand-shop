import Search from 'antd/es/input/Search'

export const SearchFilter = () => {
	return (
		<Search
			className={'w-[250px]'}
			placeholder="Search"
			onSearch={() => {}}
			enterButton
			allowClear
			// loading={true}
		/>
	)
}

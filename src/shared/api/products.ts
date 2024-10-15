export const apiURL = 'https://670d1fb5073307b4ee426411.mockapi.io/'

export const fetchProducts = async (url: string) => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error('Failed to fetch products')
	}
	return response.json()
}

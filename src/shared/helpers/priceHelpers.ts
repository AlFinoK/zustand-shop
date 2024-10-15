export const cleanPrice = (price: string): number => {
	const cleanedStr = price.replace(/(\d+)\.\1+\.\1+/g, '$1')
	return parseFloat(cleanedStr)
}

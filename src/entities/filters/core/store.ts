import { create } from 'zustand'

type FilterState = {
	category: string | null
	priceRange: [number, number] | null
	search: string | null
	priceSort: 'lowest' | 'highest' | null
}

type FilterActions = {
	setCategory: (category: string | null) => void
	setPriceRange: (range: [number, number] | null) => void
	setSearch: (search: string | null) => void
	setPriceSort: (sort: 'lowest' | 'highest' | null) => void
	clearFilters: () => void
}
export const useFilterStore = create<FilterState & FilterActions>((set) => ({
	category: null,
	priceRange: null,
	search: null,
	priceSort: null,

	setCategory: (category: string | null) => set({ category }),
	setPriceRange: (range: [number, number] | null) => set({ priceRange: range }),
	setSearch: (search: string | null) => set({ search }),
	setPriceSort: (sort: 'lowest' | 'highest' | null) => set({ priceSort: sort }),
	clearFilters: () => set({ category: null, priceRange: null, search: null, priceSort: null }),
}))
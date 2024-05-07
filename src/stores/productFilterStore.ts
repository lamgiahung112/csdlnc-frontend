import { createStore } from "@lamgiahung112/react-simple-store"

const productFilterStore = createStore<ProductFilterStoreProps>((set) => {
	return {
		page: 1,
		pageSize: 10,
		category: null,
		color: null,
		year: null,
		name: null,
		decrementPage() {
			set((prev) => {
				return {
					...prev,
					page: prev.page > 1 ? prev.page - 1 : prev.page,
				}
			})
		},
		incrementPage() {
			set((prev) => {
				return {
					...prev,
					page: prev.page + 1,
				}
			})
		},
		goToPage(page) {
			set((prev) => {
				return { ...prev, page: page > 0 ? page : 1 }
			})
		},
		setCategory(value) {
			set((prev) => {
				return { ...prev, category: value }
			})
		},
		setName(value) {
			set((prev) => {
				return { ...prev, name: value }
			})
		},
		setYear(value) {
			set((prev) => {
				return { ...prev, year: value }
			})
		},
		setPageSize(sz) {
			set((prev) => {
				return { ...prev, pageSize: sz }
			})
		},
		setColor(value) {
			set((prev) => {
				return { ...prev, color: value }
			})
		},
	}
})

export default productFilterStore

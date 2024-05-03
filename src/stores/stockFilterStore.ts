import { createStore } from "@lamgiahung112/react-simple-store"

const stockFilterStore = createStore<StockFilterStoreProps>((set) => {
	return {
		pageSize: 100,
		labels: {
			adjClose: false,
			close: false,
			high: true,
			low: false,
			open: false,
			volume: false,
		},
		setPageSize(pgSize) {
			set((prev) => ({ ...prev, pageSize: pgSize }))
		},
		setFromDate(date) {
			set((prev) => ({ ...prev, fromDate: date }))
		},
		setToDate(date) {
			set((prev) => ({ ...prev, toDate: date }))
		},
		setLabel(label, value) {
			set((prev) => ({
				...prev,
				labels: {
					...prev.labels,
					[label]: value,
				},
			}))
		},
	}
})

export default stockFilterStore

import { createStore } from "@lamgiahung112/react-simple-store"
import getStockSnapshots from "../actions/getStockSnapshots"

const stockSnapshotStore = createStore<StockSnapshotStoreProps>((set) => {
	return {
		data: [],
		fetchSnapshots(options) {
			getStockSnapshots(options).then((data) => {
				set((prev) => ({ ...prev, data }))
			})
		},
	}
})

export default stockSnapshotStore

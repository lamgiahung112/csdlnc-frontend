import { createStore } from "@lamgiahung112/react-simple-store"
import getProductSnapshots from "../actions/getProductSnapshots"

const productSnapshotStore = createStore<ProductSnapshotStoreProps>((set) => {
	return {
		data: [],
		fetchSnapshots(options) {
			getProductSnapshots(options).then((data) => {
				set((prev) => ({ ...prev, data }))
			})
		},
	}
})

export default productSnapshotStore

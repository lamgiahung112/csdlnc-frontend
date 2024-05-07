import { useStore } from "@lamgiahung112/react-simple-store"
import productFilterStore from "./stores/productFilterStore"
import { useEffect } from "react"
import productSnapshotStore from "./stores/productSnapshotStore"
import Filter from "./Filter"
import Table from "./Table"
import Modal from "./Modal"

function App() {
	const filterOptions = useStore(productFilterStore)
	const { fetchSnapshots } = useStore(productSnapshotStore)

	useEffect(() => {
		fetchSnapshots(filterOptions)
	}, [filterOptions])

	return (
		<div className="flex flex-col gap-y-8 min-w-full h-screen overflow-x-auto max-w-[100vw] bg-neutral-800 text-white">
			<Filter />
			<Table />
			<Modal />
		</div>
	)
}

export default App

import { useStore } from "@lamgiahung112/react-simple-store"
import stockFilterStore from "./stores/stockFilterStore"
import { useEffect } from "react"
import stockSnapshotStore from "./stores/stockSnapshotStore"
import StockChart from "./StockChart"
import Filter from "./Filter"

function App() {
	const filterOptions = useStore(stockFilterStore)
	const { fetchSnapshots } = useStore(stockSnapshotStore)

	useEffect(() => {
		fetchSnapshots(filterOptions)
	}, [filterOptions.pageSize, filterOptions.toDate, filterOptions.fromDate])

	return (
		<div className="flex flex-col gap-y-8 min-w-full h-screen max-w-[100vw] bg-neutral-700 text-white">
			<div className="text-7xl font-medium">Google Stock Prices</div>
			<Filter />
			<StockChart />
		</div>
	)
}

export default App

import { useStore } from "@lamgiahung112/react-simple-store"
import stockFilterStore from "./stores/stockFilterStore"

function Filter() {
	const filterOptions = useStore(stockFilterStore)
	return (
		<div className="flex gap-x-4 px-8">
			<div className="flex flex-col">
				<label htmlFor="from">From:</label>
				<input
					className="text-black h-8"
					id="from"
					type="date"
					onChange={(e) => filterOptions.setFromDate(e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="to">To:</label>
				<input
					className="text-black h-8"
					id="to"
					type="date"
					onChange={(e) => filterOptions.setToDate(e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="points">Number of points:</label>
				<input
					min={1}
					className="text-black h-8"
					id="points"
					type="number"
					required
					defaultValue={filterOptions.pageSize}
					onChange={(e) => filterOptions.setPageSize(+e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="high">High:</label>
				<input
					min={0}
					className="text-black h-8"
					id="high"
					type="checkbox"
					defaultValue={filterOptions.labels.high ? "checked" : ""}
					onChange={(e) => filterOptions.setLabel("high", e.target.checked)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="low">Low:</label>
				<input
					min={0}
					className="text-black h-8"
					id="low"
					type="checkbox"
					defaultValue={filterOptions.labels.low ? "checked" : ""}
					onChange={(e) => filterOptions.setLabel("low", e.target.checked)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="open">Open:</label>
				<input
					min={0}
					className="text-black h-8"
					id="open"
					type="checkbox"
					defaultValue={filterOptions.labels.open ? "checked" : ""}
					onChange={(e) => filterOptions.setLabel("open", e.target.checked)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="close">Close:</label>
				<input
					min={0}
					className="text-black h-8"
					id="close"
					type="checkbox"
					defaultValue={filterOptions.labels.close ? "checked" : ""}
					onChange={(e) => filterOptions.setLabel("close", e.target.checked)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="volume">Volume:</label>
				<input
					min={0}
					className="text-black h-8"
					id="volume"
					type="checkbox"
					defaultValue={filterOptions.labels.volume ? "checked" : ""}
					onChange={(e) => filterOptions.setLabel("volume", e.target.checked)}
				/>
			</div>
		</div>
	)
}

export default Filter

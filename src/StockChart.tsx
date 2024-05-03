import { useStore } from "@lamgiahung112/react-simple-store"
import stockSnapshotStore from "./stores/stockSnapshotStore"
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
} from "chart.js"
import { Chart } from "react-chartjs-2"
import stockFilterStore from "./stores/stockFilterStore"

ChartJS.register(
	ArcElement,
	LineElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement
)

function StockChart() {
	const { data } = useStore(stockSnapshotStore)
	const { adjClose, close, high, low, open, volume } = useStore(
		stockFilterStore,
		(store) => store.labels
	)

	return (
		<Chart
			className="bg-white max-h-[50vh] mx-8"
			data={{
				datasets: [
					{
						data: high ? data.map((snapshot) => snapshot.high) : [],
						label: "High",
						backgroundColor: "#41B06E",
						borderColor: "#41B06E",
						type: "line",
					},
					{
						data: low ? data.map((snapshot) => snapshot.low) : [],
						label: "Low",
						backgroundColor: "#8DECB4",
						borderColor: "#8DECB4",
						type: "line",
					},
					{
						data: open ? data.map((snapshot) => snapshot.open) : [],
						label: "Open",
						backgroundColor: "#0E46A3",
						borderColor: "#0E46A3",
						type: "line",
					},
					{
						data: close ? data.map((snapshot) => snapshot.close) : [],
						label: "Close",
						backgroundColor: "#141E46",
						borderColor: "#141E46",
						type: "line",
					},
					{
						data: volume ? data.map((snapshot) => snapshot.volume) : [],
						label: "Volume",
						backgroundColor: "rgb(237, 148, 85)",
						borderColor: "rgb(237, 148, 85)",
						type: "bar",
					},
				],
				labels: data.map((snapshot) => snapshot.date),
			}}
			type="scatter"
		/>
	)
}

export default StockChart

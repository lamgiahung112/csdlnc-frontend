import axios from "axios"

export default async function getStockSnapshots(options: StockSnapshotOptions) {
	const query = `pageSize=${options.pageSize}${
		options.fromDate ? `&fromDate=${options.fromDate}` : ""
	}${options.toDate ? `&toDate=${options.toDate}` : ""}`

	return axios
		.get<StockSnapshot[]>(`http://localhost:8080/data?${query}`)
		.then((res) => res.data)
}

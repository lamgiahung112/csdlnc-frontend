declare interface StockSnapshot {
	date: string
	open: number
	close: number
	high: number
	low: number
	adjClose: number
	volume: number
}

declare type StockSnapshotStoreProps = {
	data: StockSnapshot[]
	fetchSnapshots(options: StockSnapshotOptions): void
}

declare type StockSnapshotOptions = {
	fromDate?: string
	toDate?: string
	pageSize: number
	labels: {
		open: boolean
		close: boolean
		high: boolean
		low: boolean
		adjClose: boolean
		volume: boolean
	}
}

declare type StockFilterStoreProps = StockSnapshotOptions & {
	setPageSize(pgSize: number)
	setFromDate(date?: string)
	setToDate(date?: string)
	setLabel(label: "open" | "close" | "high" | "low" | "volume", value: boolean)
}

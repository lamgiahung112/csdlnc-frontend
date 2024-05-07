declare interface Product {
	id: string
	gender: string
	masterCategory: string
	subCategory: string
	articleType: string
	baseColour: string
	season: string
	year: string
	usage: string
	productDisplayName: string
}

declare type ProductSnapshotStoreProps = {
	data: Product[]
	fetchSnapshots(options: ProductOptions): void
}

declare type ProductOptions = {
	page: number
	pageSize: number
	category: string | null
	color: string | null
	year: string | null
	name: string | null
}

declare type ProductFilterStoreProps = ProductOptions & {
	incrementPage(): void
	decrementPage(): void
	goToPage(page: number): void
	setPageSize(sz: number): void
	setCategory(value: string): void
	setYear(value: string): void
	setName(value: string): void
	setColor(value: string): void
}

declare type ModalStore = {
	isOpen: boolean
	title?: string
	component?: React.JSX.Element
	open(options: { component: React.JSX.Element; title: string }): void
	close(): void
}

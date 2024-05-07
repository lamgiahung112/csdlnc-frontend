import { useStore } from "@lamgiahung112/react-simple-store"
import productFilterStore from "./stores/productFilterStore"

function Filter() {
	const filterOptions = useStore(productFilterStore)
	return (
		<div className="flex gap-x-4 px-8">
			<div className="flex flex-col">
				<label htmlFor="name">Product Name:</label>
				<input
					min={0}
					className="text-black h-8 caret-black p-2 outline-none"
					id="name"
					onChange={(e) => filterOptions.setName(e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="cat">Category:</label>
				<input
					min={0}
					className="text-black h-8 caret-black p-2 outline-none"
					id="cat"
					onChange={(e) => filterOptions.setCategory(e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="color">Color:</label>
				<input
					min={0}
					className="text-black h-8 caret-black p-2 outline-none"
					id="color"
					onChange={(e) => filterOptions.setColor(e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="year">Year:</label>
				<input
					min={0}
					className="text-black h-8 caret-black p-2 outline-none"
					id="year"
					onChange={(e) => filterOptions.setYear(e.target.value)}
				/>
			</div>
			<div className="flex gap-x-4 items-end ml-8 mr-8">
				<button onClick={filterOptions.decrementPage}>Previous</button>
				<input
					min={1}
					className="text-black h-8 caret-black p-2 outline-none"
					id="page"
					type="number"
					defaultValue={filterOptions.page}
					onChange={(e) => filterOptions.goToPage(+e.target.value)}
				/>
				<button onClick={filterOptions.incrementPage}>Next</button>
			</div>
			<div className="flex flex-col">
				<label htmlFor="rec">Number of records:</label>
				<input
					min={1}
					className="text-black h-8 caret-black p-2 outline-none"
					id="rec"
					type="number"
					defaultValue={filterOptions.pageSize}
					onChange={(e) => filterOptions.setPageSize(+e.target.value)}
				/>
			</div>
		</div>
	)
}

export default Filter

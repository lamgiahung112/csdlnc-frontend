import { useStore } from "@lamgiahung112/react-simple-store"
import productSnapshotStore from "./stores/productSnapshotStore"
import modalStore from "./stores/modalStore"
import UpdateProductForm from "./UpdateProductForm"

function Table() {
	const { data } = useStore(productSnapshotStore)
	const open = useStore(modalStore, (store) => store.open)
	return (
		<div className="flex flex-col px-[10%]">
			<div className="flex w-full justify-between mb-8 p-4">
				<div className="flex-1">Image</div>
				<div className="flex-[2]">Product Name</div>
				<div className="flex-[2]">Category</div>
				<div className="flex-1">Gender</div>
				<div className="flex-1">Type</div>
				<div className="flex-1">Color</div>
				<div className="flex-1">Year</div>
			</div>
			{data.map((product) => {
				return (
					<div
						key={product.id}
						onClick={() =>
							open({
								component: <UpdateProductForm product={product} />,
								title: "Update Product",
							})
						}
						className="flex w-full justify-between items-center mb-8 hover:bg-neutral-500 p-4 cursor-pointer"
					>
						<div className="flex-1">
							<img src={`http://localhost:8080/${product.id}.jpg`} />
						</div>
						<div className="flex-[2]">{product.productDisplayName}</div>
						<div className="flex-[2]">
							{product.masterCategory}, {product.subCategory}
						</div>
						<div className="flex-1">{product.gender}</div>
						<div className="flex-1">{product.articleType}</div>
						<div className="flex-1">{product.baseColour}</div>
						<div className="flex-1">{product.year}</div>
					</div>
				)
			})}
		</div>
	)
}

export default Table

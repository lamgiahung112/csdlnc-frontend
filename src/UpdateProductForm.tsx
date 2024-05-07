import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react"
import updateProducts from "./actions/updateProducts"
import { useStore } from "@lamgiahung112/react-simple-store"
import modalStore from "./stores/modalStore"

interface UpdateProductFormProps {
	product: Product
}

const UpdateProductForm: FC<UpdateProductFormProps> = ({ product }) => {
	const close = useStore(modalStore, (store) => store.close)
	const imgRef = useRef<HTMLInputElement>(null)
	const formRef = useRef<HTMLFormElement>(null)

	const [previewImgSrc, setPreviewImgSrc] = useState<string | null>(null)
	const [previewImgName, setPreviewImgName] = useState<string | null>(null)

	function onImgChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.files) {
			setPreviewImgSrc(URL.createObjectURL(e.target.files[0]))
			setPreviewImgName(e.target.files[0].name)
		}
	}

	function onSubmit(e: FormEvent) {
		e.preventDefault()
		if (!formRef.current) {
			return
		}

		const data = new FormData(formRef.current)
		data.append("id", product.id)
		updateProducts(data, imgRef.current?.files?.item(0)).then(close)
	}

	return (
		<form ref={formRef} onSubmit={onSubmit}>
			<div className="flex">
				<div className="flex flex-[1] flex-col items-center gap-y-4 group">
					<img src={`http://localhost:8080/${product.id}.jpg`} />
					<div
						className="bg-neutral-600 p-2 rounded-md cursor-pointer"
						onClick={() => imgRef.current?.click()}
					>
						Choose another image
					</div>
					<input
						onChange={onImgChange}
						type="file"
						accept=".jpg"
						hidden
						ref={imgRef}
						name="file"
					/>
					{previewImgSrc && (
						<div>
							<img src={previewImgSrc} />
							{previewImgName}
						</div>
					)}
				</div>
				<div className="flex-[2] flex flex-col gap-y-4">
					<div className="flex flex-col gap-x-2">
						<div>Product Name:</div>
						<input
							required
							name="productDisplayName"
							defaultValue={product.productDisplayName}
							className="text-black p-2 outline-none rounded-md"
						/>
					</div>
					<div className="flex gap-x-4">
						<div className="flex flex-[1] flex-col gap-x-2">
							<div>Master Category:</div>
							<input
								required
								name="masterCategory"
								defaultValue={product.masterCategory}
								className="text-black p-2 outline-none rounded-md"
							/>
						</div>
						<div className="flex flex-[1] flex-col gap-x-2">
							<div>Sub Category:</div>
							<input
								required
								name="subCategory"
								defaultValue={product.subCategory}
								className="text-black p-2 outline-none rounded-md"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-x-2">
						<div>Gender:</div>
						<input
							required
							name="gender"
							defaultValue={product.gender}
							className="text-black p-2 outline-none rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-x-2">
						<div>Type:</div>
						<input
							required
							name="articleType"
							defaultValue={product.articleType}
							className="text-black p-2 outline-none rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-x-2">
						<div>Base Colour:</div>
						<input
							required
							name="baseColour"
							defaultValue={product.baseColour}
							className="text-black p-2 outline-none rounded-md"
						/>
					</div>
					<div className="flex gap-x-4">
						<div className="flex flex-[1] flex-col gap-x-2">
							<div>Season:</div>
							<input
								required
								name="season"
								defaultValue={product.season}
								className="text-black p-2 outline-none rounded-md"
							/>
						</div>
						<div className="flex flex-[1] flex-col gap-x-2">
							<div>Year:</div>
							<input
								required
								name="year"
								type="number"
								defaultValue={product.year}
								className="text-black p-2 outline-none rounded-md"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-x-2">
						<div>Usage:</div>
						<input
							required
							name="usage"
							defaultValue={product.usage}
							className="text-black p-2 outline-none rounded-md"
						/>
					</div>
					<button
						type="submit"
						className="w-full p-4 bg-green-800 rounded-md flex items-center justify-center cursor-pointer hover:bg-green-700"
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	)
}

export default UpdateProductForm

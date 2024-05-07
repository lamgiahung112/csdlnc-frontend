import axios from "axios"

export default async function updateProducts(
	productAsFormData: FormData,
	newImg?: File | null
) {
	const json = {
		id: productAsFormData.get("id"),
		gender: productAsFormData.get("gender"),
		articleType: productAsFormData.get("articleType"),
		productDisplayName: productAsFormData.get("productDisplayName"),
		masterCategory: productAsFormData.get("masterCategory"),
		subCategory: productAsFormData.get("subCategory"),
		baseColour: productAsFormData.get("baseColour"),
		season: productAsFormData.get("season"),
		year: Number(productAsFormData.get("year")),
		usage: productAsFormData.get("usage"),
	}

	const dataToSend = new FormData()
	dataToSend.append("metadata", JSON.stringify(json))
	dataToSend.append("file", newImg as Blob)
	return axios.post(`http://localhost:8080/data/update`, dataToSend, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	})
}

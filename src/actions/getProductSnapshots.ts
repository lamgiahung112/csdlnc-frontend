import axios from "axios"

export default async function getProductSnapshots(options: ProductOptions) {
	const query = `pageSize=${options.pageSize}&page=${options.page}
	${options.color ? `&color=${options.color}` : ""}
	${options.category ? `&category=${options.category}` : ""}
	${options.name ? `&name=${options.name}` : ""}
	${options.year ? `&year=${options.year}` : ""}`

	return axios
		.get<Product[]>(`http://localhost:8080/data?${query}`)
		.then((res) => res.data)
}

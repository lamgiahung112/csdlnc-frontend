import { createStore } from "@lamgiahung112/react-simple-store"

const modalStore = createStore<ModalStore>((set) => {
	return {
		isOpen: false,
		title: undefined,
		component: undefined,
		close() {
			set((prev) => {
				return {
					...prev,
					isOpen: false,
					component: undefined,
					title: undefined,
				}
			})
		},
		open(options) {
			set((prev) => {
				return {
					...prev,
					...options,
					isOpen: true,
				}
			})
		},
	}
})

export default modalStore

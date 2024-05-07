import { useStore } from "@lamgiahung112/react-simple-store"
import modalStore from "./stores/modalStore"

function Modal() {
	const { close, isOpen, open, title, component } = useStore(modalStore)

	if (!isOpen) {
		return <></>
	}

	return (
		<>
			<div className="z-20 flex flex-col rounded-lg fixed top-0 left-0 p-4 translate-x-[50%] my-4 transition w-[50%] bg-neutral-700">
				<div className="flex justify-between mb-4">
					<h1 className="text-xl">{title}</h1>
					<div
						className="flex items-center justify-center bg-neutral-500 rounded-full p-1 h-6 w-6 cursor-pointer"
						onClick={close}
					>
						<span>X</span>
					</div>
				</div>
				{component}
			</div>
			<div
				className="fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-75 bg-neutral-800"
				onClick={close}
			></div>
		</>
	)
}

export default Modal

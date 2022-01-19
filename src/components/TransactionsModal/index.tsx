import Modal from "react-modal";

Modal.setAppElement("#root");

interface TransactionsModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function TransactionsModal({
	isOpen,
	onRequestClose,
}: TransactionsModalProps) {
	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<h1>Nova Transação</h1>
			<button type="button" onClick={onRequestClose}>
				Fechar
			</button>
		</Modal>
	);
}

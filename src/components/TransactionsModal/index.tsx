import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./styles";

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
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container>
				<AiOutlineClose onClick={onRequestClose} className="closeButton" />
				<h2>Cadastrar Transação</h2>
				<input type="text" name="title" id="title" placeholder="Titulo" />
				<input type="number" name="value" id="value" placeholder="Valor" />
				<input
					type="text"
					name="category"
					id="category"
					placeholder="Categoria"
				/>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}

import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import {
	Container,
	TransactionTypeContainer,
	TransactionTypeButton,
} from "./styles";

Modal.setAppElement("#root");

interface TransactionsModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function TransactionsModal({
	isOpen,
	onRequestClose,
}: TransactionsModalProps) {
	const [transactionType, setTransactionType] = useState("deposit");

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

				<TransactionTypeContainer>
					<TransactionTypeButton
						type="button"
						onClick={() => setTransactionType("deposit")}
						isActive={transactionType === "deposit"}
						activeColor="green"
					>
						<BiUpArrowAlt size={30} id="arrowUp" />
						<span>Entrada</span>
					</TransactionTypeButton>
					<TransactionTypeButton
						type="button"
						onClick={() => setTransactionType("withdraw")}
						isActive={transactionType === "withdraw"}
						activeColor="red"
					>
						<BiDownArrowAlt size={30} id="arrowDown" />
						<span>Saída</span>
					</TransactionTypeButton>
				</TransactionTypeContainer>
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

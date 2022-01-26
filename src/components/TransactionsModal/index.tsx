import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import {
	Container,
	TransactionTypeContainer,
	TransactionTypeButton,
} from "./styles";
import { api } from "../../services/api";
import { TransactionsContext } from "../Context/TransactionsContext";

Modal.setAppElement("#root");

interface TransactionsModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function TransactionsModal({
	isOpen,
	onRequestClose,
}: TransactionsModalProps) {
	const { createTransaction } = useContext(TransactionsContext);

	const [title, setTitle] = useState("");
	const [value, setValue] = useState(0);
	const [category, setCategory] = useState("");
	const [transactionType, setTransactionType] = useState("deposit");

	function handleCreateNewTransaction(e: FormEvent) {
		e.preventDefault();
		createTransaction({
			title,
			amount: value,
			category,
			type: transactionType,
		});
		onRequestClose();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container onSubmit={handleCreateNewTransaction}>
				<AiOutlineClose onClick={onRequestClose} className="closeButton" />
				<h2>Cadastrar Transação</h2>
				<input
					type="text"
					name="title"
					id="title"
					placeholder="Titulo"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="number"
					name="value"
					id="value"
					placeholder="Valor"
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
				/>

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
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}

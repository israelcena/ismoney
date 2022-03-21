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
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [transactionType, setTransactionType] = useState("deposit");

	async function handleCreateNewTransaction(e: FormEvent) {
		e.preventDefault();
		await createTransaction({
			title,
			amount,
			category,
			type: transactionType,
		});
		setTitle("");
		setAmount(0);
		setCategory("");
		setTransactionType("deposit");
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
					placeholder="Nome da Transação"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="number"
					min="1"
					step="any"
					name="amount"
					id="amount"
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
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

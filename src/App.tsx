import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<>
			<Modal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			>
				<h1>Nova Transação</h1>
				<button type="button" onClick={handleCloseNewTransactionModal}>
					Fechar
				</button>
			</Modal>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />

			<GlobalStyle />
		</>
	);
}

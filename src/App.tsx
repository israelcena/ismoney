import { useState } from "react";
import { TransactionsContextProvider } from "./components/Context/TransactionsContext";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsModal } from "./components/TransactionsModal";
import { GlobalStyle } from "./styles/global";

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
		<TransactionsContextProvider>
			<TransactionsModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<GlobalStyle />
		</TransactionsContextProvider>
	);
}

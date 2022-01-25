import { Children, createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../../services/api";

export const TransactionsContext = createContext<TransactionProps[]>([]);

interface TransactionProps {
	id: number;
	title: string;
	type: string;
	amount: number;
	category: string;
	createdAt: string;
}

interface TransactionChildren {
	children: ReactNode;
}

export function TransactionsContextProvider({ children }: TransactionChildren) {
	const [transactions, setTransactions] = useState<TransactionProps[]>([]);

	useEffect(() => {
		api
			.get("transactions")
			.then((res) => setTransactions(res.data.transactions));
	}, []);
	return (
		<TransactionsContext.Provider value={transactions}>
			{children}
		</TransactionsContext.Provider>
	);
}

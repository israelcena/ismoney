import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../../services/api";

interface TransactionProps {
	id: number;
	title: string;
	type: string;
	amount: number;
	category: string;
	createdAt: string;
}

type TransactionInput = Omit<TransactionProps, "id" | "createdAt">;

interface TransactionChildren {
	children: ReactNode;
}

interface TransactionContextProps {
	transactions: TransactionProps[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextProps>(
	{} as TransactionContextProps
);

export function TransactionsContextProvider({ children }: TransactionChildren) {
	const [transactions, setTransactions] = useState<TransactionProps[]>([]);

	async function createTransaction(transactionInput: TransactionInput) {
		const res = await api.post("transactions", {
			...transactionInput,
			createdAt: new Date().toISOString(),
		});

		const { transaction } = res.data;

		setTransactions([...transactions, transaction]);
	}

	useEffect(() => {
		api
			.get("transactions")
			.then((res) => setTransactions(res.data.transactions));
	}, []);
	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
}

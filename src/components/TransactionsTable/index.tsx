import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { Container } from "./styles";

interface Transaction {
	id: number;
	title: string;
	type: string;
	amount: number;
	category: string;
	createdAt: string;
}

export default function TransactionsTable() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api
			.get("transactions")
			.then((res) => setTransactions(res.data.transactions));
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categorias</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td className="title">{transaction.title}</td>
							<td className={transaction.type}>
								{transaction.type === "deposit" ? "" : "-"}
								{new Intl.NumberFormat("pt-BR", {
									style: "currency",
									currency: "BRL",
								}).format(transaction.amount)}
							</td>
							<td>{transaction.category}</td>
							<td>
								{new Intl.DateTimeFormat("pt-BR").format(
									new Date(transaction.createdAt)
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}

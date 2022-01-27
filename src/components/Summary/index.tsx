import { Container } from "./styles";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useContext } from "react";
import { TransactionsContext } from "../Context/TransactionsContext";

export function Summary() {
	const { transactions } = useContext(TransactionsContext);

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === "deposit") {
				acc.deposit += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.withdraw += transaction.amount;
				acc.total -= transaction.amount;
			}

			return acc;
		},
		{
			deposit: 0,
			withdraw: 0,
			total: 0,
		}
	);
	console.log(summary);
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<BiUpArrowAlt size={30} id="arrowUp" />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.deposit)}
				</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<BiDownArrowAlt size={30} id="arrowDown" />
				</header>
				<strong>
					{summary.withdraw !== 0 ? "-" : ""}
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.withdraw)}
				</strong>
			</div>

			<div className="highlight-background">
				<header>
					<p>Total</p>
					<RiMoneyDollarCircleLine size={35} />
				</header>
				<strong>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	);
}

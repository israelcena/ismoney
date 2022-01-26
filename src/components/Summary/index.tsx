import { Container } from "./styles";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useContext } from "react";
import { TransactionsContext } from "../Context/TransactionsContext";

export function Summary() {
	const { transactions } = useContext(TransactionsContext);
	console.log(transactions);
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<BiUpArrowAlt size={30} id="arrowUp" />
				</header>
				<strong>R$ 1000,00</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<BiDownArrowAlt size={30} id="arrowDown" />
				</header>
				<strong>R$ -500,00</strong>
			</div>

			<div className="highlight-background">
				<header>
					<p>Total</p>
					<RiMoneyDollarCircleLine size={35} />
				</header>
				<strong>R$ 500,00</strong>
			</div>
		</Container>
	);
}

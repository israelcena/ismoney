import { Container } from "./styles";
export default function TransactionsTable() {
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
					<tr>
						<td className="title">Almoço de final de semana</td>
						<td className="withdraw">-R$ 30,00</td>
						<td>Almoço</td>
						<td>04/06/2020</td>
					</tr>
					<tr>
						<td className="title">Aluguel</td>
						<td className="withdraw">-R$ 3000,00</td>
						<td>Dívida</td>
						<td>04/06/2020</td>
					</tr>
					<tr>
						<td className="title">Site Dev</td>
						<td className="deposit">R$ 6000,00</td>
						<td>Trabalho</td>
						<td>01/06/2020</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}

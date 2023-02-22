import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransitionsTable, PriceHighlight } from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransitionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>22/02/2023</td>
            </tr>

            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 59,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>22/02/2023</td>
            </tr>
          </tbody>
        </TransitionsTable>
      </TransactionsContainer>
    </>
  );
}
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../../components/SearchForm";
import { TransactionsContainer, TransitionsTable, PriceHighlight } from "./styles";
import { TransactiosnContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {

  const {transactions} = useContext(TransactiosnContext);

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>

        <SearchForm />

        <TransitionsTable>
          <tbody>

            {transactions.map(transaction => {
              return(
                <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
              );
            })}

          </tbody>
        </TransitionsTable>
      </TransactionsContainer>
    </>
  );
}
import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactiosnContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function Transactions() {
    const response = await  fetch('http://localhost:3000/transactions');
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(()=> {
    Transactions();
  }, [])

  return(
    <TransactiosnContext.Provider value={{transactions}}>
      {children}
    </TransactiosnContext.Provider>
  );
}
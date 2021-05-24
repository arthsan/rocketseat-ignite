import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  category: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

type TransactionInput = Omit<Transaction, "id" | "createdAt">;
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsContextData {
  transacations: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transacations, setTransacations] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transacations")
      .then((response) => setTransacations(response.data.transacations));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transacations", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transacation } = response.data;

    console.log(transacation)

    setTransacations([...transacations, transacation]);
  }

  return (
    <TransactionsContext.Provider value={{ transacations, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}

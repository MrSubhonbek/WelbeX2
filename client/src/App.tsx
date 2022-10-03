import { FC } from "react";
import { TableContainer } from "./pages/TableContainer";
import { useFetchAllExpensesQuery } from "./store/services/ExpensesService";
export const App: FC = () => {
  const { data } = useFetchAllExpensesQuery();
  return (
    <div>
      <TableContainer />
    </div>
  );
};

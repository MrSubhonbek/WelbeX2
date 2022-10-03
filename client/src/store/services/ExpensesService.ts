import { createApi } from "@reduxjs/toolkit/dist/query/react";
import axios from "axios";
import { IExpenses } from "../models/IExpenses";

const getExpensesData = async () => {
  const response = await axios.get(
    "https://fake-api-expenses.herokuapp.com/data"
  );
  return response;
};

export const expensesAPI = createApi({
  reducerPath: "expensesAPI",
  baseQuery: getExpensesData,
  endpoints: (build) => ({
    fetchAllExpenses: build.query<{ data: IExpenses[] }, void>({
      query: () => ({
        url: `/`,
      }),
    }),
    fetchOneExpenses: build.query<IExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/${expenses._id}`,
      }),
    }),
    createExpenses: build.mutation<IExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/`,
        method: "POST",
        body: expenses,
      }),
    }),
    updateExpenses: build.mutation<IExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/${expenses._id}`,
        method: "PUT",
        body: expenses,
      }),
    }),
    deleteExpenses: build.mutation<IExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/${expenses._id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useUpdateExpensesMutation,
  useFetchAllExpensesQuery,
  useFetchOneExpensesQuery,
  useDeleteExpensesMutation,
  useCreateExpensesMutation,
} = expensesAPI;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IArrayExpenses,
  IExpenses,
  ILimit,
  ISearchData,
  ISortData,
} from "../models/IExpenses";

export const expensesAPI = createApi({
  reducerPath: "expensesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (build) => ({
    fetchSortData: build.query<IArrayExpenses, ISortData>({
      query: (sort) => ({
        url: `/data?_sort=${sort.sortColum}&_order=asc&_start=${sort.limit.start}&_end=${sort.limit.end}`,
      }),
    }),
    fetchSearchData: build.query<IArrayExpenses, ISearchData>({
      query: (search) => ({
        url: `/data?q=${search.searchValue}&_start=${search.limit.start}&_end=${search.limit.end}`,
      }),
    }),
    fetchLimitData: build.query<IArrayExpenses, ILimit>({
      query: (limit) => ({
        url: `/data?_start=${limit.start}&_end=${limit.end}`,
      }),
    }),
    fetchAllExpenses: build.query<IArrayExpenses, void>({
      query: () => ({
        url: `/`,
      }),
    }),
    fetchOneExpenses: build.query<IArrayExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/${expenses._id}`,
      }),
    }),
    createExpenses: build.mutation<IArrayExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/`,
        method: "POST",
        body: expenses,
      }),
    }),
    updateExpenses: build.mutation<IArrayExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/${expenses._id}`,
        method: "PUT",
        body: expenses,
      }),
    }),
    deleteExpenses: build.mutation<IArrayExpenses, IExpenses>({
      query: (expenses) => ({
        url: `/${expenses._id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useFetchLimitDataQuery,
  useFetchSearchDataQuery,
  useFetchSortDataQuery,
  useUpdateExpensesMutation,
  useFetchAllExpensesQuery,
  useFetchOneExpensesQuery,
  useDeleteExpensesMutation,
  useCreateExpensesMutation,
} = expensesAPI;

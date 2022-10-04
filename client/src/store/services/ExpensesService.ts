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
  tagTypes: ["Expenses"],
  endpoints: (build) => ({
    fetchAllExpenses: build.query<IExpenses[], ILimit>({
      query: (limit) => ({
        url: `/data?_start=${limit.start}&_end=${limit.end}`,
      }),
      providesTags: ["Expenses"],
    }),
    fetchSortData: build.mutation<IExpenses[], ISortData>({
      query: (sort) => ({
        url: `/data?_sort=${sort.sortColum}&_order=asc&_start=${sort.limit.start}&_end=${sort.limit.end}`,
      }),
      invalidatesTags: ["Expenses"],
    }),
    fetchSearchData: build.mutation<IExpenses[], ISearchData>({
      query: (search) => ({
        url: `/data?q=${search.searchValue}&_start=${search.limit.start}&_end=${search.limit.end}`,
      }),
      invalidatesTags: ["Expenses"],
    }),
    fetchLimitData: build.mutation<IExpenses[], ILimit>({
      query: (limit) => ({
        url: `/data?_start=${limit.start}&_end=${limit.end}`,
      }),
      invalidatesTags: ["Expenses"],
    }),
  }),
});
export const {
  useFetchLimitDataMutation,
  useFetchSearchDataMutation,
  useFetchSortDataMutation,
  useFetchAllExpensesQuery,
} = expensesAPI;

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { IExpenses } from "../models/IExpenses";

export const expensesAPI = createApi({
    reducerPath: 'expensesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    endpoints: (build) => ({
        fetchAllExpenses: build.query<IExpenses[], number>({
            query: (limit: number = 5) => ({
                url: `/expenses`,
                params: {
                    _limit: limit
                }
            })
        }),
        fetchOneExpenses: build.mutation<IExpenses, IExpenses>({
            query: (expenses) => ({
                url: `/expenses/${expenses.id}`,
            })
        }),
        createExpenses: build.mutation<IExpenses, IExpenses>({
            query: (expenses) => ({
                url: `/expenses`,
                method: 'POST',
                body: expenses
            })
        }),
        updateExpenses: build.mutation<IExpenses, IExpenses>({
            query: (expenses) => ({
                url: `/expenses/${expenses.id}`,
                method: 'PUT',
                body: expenses
            })
        }),
        deleteExpenses: build.mutation<IExpenses, IExpenses>({
            query: (expenses) => ({
                url: `/expenses/${expenses.id}`,
                method: 'DELETE',
            })
        })
    })
})

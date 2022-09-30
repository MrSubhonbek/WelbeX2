import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IExpenses } from "../models/IExpenses";

import {fetchUsers} from "./ActionCreators";

interface ExpensesState {
    expenses: IExpenses[];
    isLoading: boolean;
    error: string;
}

const initialState: ExpensesState = {
    expenses: [],
    isLoading: false,
    error: '',
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IExpenses[]>) => {
            state.isLoading = false;
            state.error = ''
            state.expenses = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default expensesSlice.reducer;

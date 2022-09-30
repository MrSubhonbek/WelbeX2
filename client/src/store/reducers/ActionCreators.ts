import axios from "axios";

import {createAsyncThunk} from "@reduxjs/toolkit";
import { IExpenses } from "../models/IExpenses";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IExpenses[]>('http://localhost:4000/api/expenses')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)

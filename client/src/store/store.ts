import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expensesAPI } from "./services/ExpensesService";

const rootReducer = combineReducers({
  [expensesAPI.reducerPath]: expensesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(expensesAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 200000,
  expenses: [],
  incomes: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    incrementBalance: (state, action) => {
      state.balance += action.payload;
    },
    decrementBalance: (state, action) => {
      state.balance -= action.payload;
    },
    addExpense: (state, action) => {
      const newExpense = action.payload;
      state.expenses.push({
        id: newExpense.id,
        value: newExpense.value,
        title: newExpense.title,
        category: newExpense.category,
        date: newExpense.date,
      });
      state.balance -= newExpense.value;
    },
    removeExpense: (state, action) => {
      const id = action.payload;
      const existingExpense = state.expenses.find(
        (expense) => expense.id === id
      );
      if (existingExpense) {
        state.expenses = state.expenses.filter((expense) => expense.id !== id);
      }
    },
  },
});

export const { incrementBalance, decrementBalance, addExpense, removeExpense } =
  balanceSlice.actions;

export default balanceSlice;

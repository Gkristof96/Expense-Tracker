import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 200000,
  currentMonthExpense: 0,
  currentMonthIncome: 0,
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
      console.log(newExpense.date);
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
      const { value } = state.expenses.find((expense) => expense.id === id);
      console.log(value);
      if (value) {
        state.balance += +value;
        state.expenses = state.expenses.filter((expense) => expense.id !== id);
      }
    },
    addIncome: (state, action) => {
      const newIncome = action.payload;
      state.incomes.push({
        id: newIncome.id,
        value: newIncome.value,
        title: newIncome.title,
        category: newIncome.category,
        date: newIncome.date,
      });
    },
    removeIncome: (state, action) => {
      const id = action.payload;
      const { value } = state.incomes.find((income) => income.id === id);
      console.log(value);
      if (value) {
        state.balance -= +value;
        state.incomes = state.incomes.filter((income) => income.id !== id);
      }
    },
    calculateCurrentMonthExpenses: (state) => {
      const date = String(new Date()).slice(0, 15).split(" ");
      state.currentMonthExpense = state.expenses.reduce((total, item) => {
        if (date[1] === item.date.month) {
          return total + +item.value;
        } else {
          return total;
        }
      }, 0);
    },
  },
});

export const {
  incrementBalance,
  decrementBalance,
  addExpense,
  removeExpense,
  addIncome,
  removeIncome,
  calculateCurrentMonthExpenses,
} = balanceSlice.actions;

export default balanceSlice;

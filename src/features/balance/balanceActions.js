import { addNewExpense } from "./balanceSlice";
import { collection, addDoc } from "firebase/firestore";
import { firestore, auth } from "../../firebase";

const expensesRef = collection(
  firestore,
  `users/${auth.currentUser.uid}/expenses`
);

export const saveExpenseData = (expense) => async (dispatch) => {
  try {
    addDoc(expensesRef, {
      value: expense.value,
      title: expense.title,
      category: expense.category,
    })
      .then(() => {
        dispatch(addNewExpense(expense));
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log(error);
  }
};

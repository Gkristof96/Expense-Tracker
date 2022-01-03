import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import DashboardLayout from "./layouts/dashboard";
import LandingLayout from "./layouts/landing";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import ExpensesPage from "./pages/Expenses";
import IncomesPage from "./pages/Incomes";
import AnalyticsPage from "./pages/Analytics";
import GoalsPage from "./pages/Goals";

export const Router = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return useRoutes([
    {
      path: "/dashboard",
      element: isLoggedIn ? <DashboardLayout /> : <Navigate to='/' />,
      children: [
        { path: "", element: <Navigate to='/dashboard/app' replace /> },
        { path: "app", element: <DashboardPage /> },
        { path: "expenses", element: <ExpensesPage /> },
        { path: "incomes", element: <IncomesPage /> },
        { path: "analytics", element: <AnalyticsPage /> },
        { path: "goals", element: <GoalsPage /> },
      ],
    },
    {
      path: "/",
      element: !isLoggedIn ? <LandingLayout /> : <Navigate to='/dashboard' />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "404", element: <NotFoundPage /> },
        { path: "/", element: <HomePage /> },
        { path: "*", element: <Navigate to='/404' /> },
      ],
    },
    { path: "*", element: <Navigate to='/404' replace /> },
  ]);
};

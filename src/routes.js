import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import LandingLayout from "./layouts/LandingLayout";

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
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
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
      element: <LandingLayout />,
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

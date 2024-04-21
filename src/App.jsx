import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard, { dashboardLoader, dashboardAction } from "./Pages/DashBoard";
import Error from "./Pages/Error";
import Main, { mainLoader } from "./Layouts/Main";
import { logOutAction } from "./Actions/Logout";
import ExpensesPage, { expenseLoader, expensesAction } from "./Pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./Pages/BudgetPage";
import deleteBudget from "./Actions/deleteBudget";




// library import 
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <DashBoard />,
        loader: dashboardLoader,
        action:dashboardAction,
        errorElement: <Error />
      },
      {
        path:"budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action:budgetAction,
        errorElement: <Error />,
        children:[
          {
            path:"delete",
            action:deleteBudget
          }
        ]
      },
      {
        path:"expenses",
        element: <ExpensesPage />,
        loader: expenseLoader,
        action:expensesAction,
        errorElement: <Error />
      },
      {
        path:"logout",
        action:logOutAction
      }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="App ">
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;

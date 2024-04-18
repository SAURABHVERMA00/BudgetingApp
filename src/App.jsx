import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard, { dashboardLoader, dashboardAction } from "./Pages/DashBoard";
import Error from "./Pages/Error";
import Main, { mainLoader } from "./Layouts/Main";
import { logOutAction } from "./Actions/Logout";




// library import 
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    children: [
      {
        index:true,
        element: <DashBoard />,
        loader: dashboardLoader,
        action:dashboardAction
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

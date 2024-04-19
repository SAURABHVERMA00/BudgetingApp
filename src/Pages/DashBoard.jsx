import React from "react";
import { createbudget, fetchData, waait } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../Components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../Components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const username = fetchData("username");
  const budgets = fetchData("budgets");
  return { username, budgets };
}

// action
export async function dashboardAction({ request }) {
  await waait();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newuser") {
    try {
      localStorage.setItem("username", JSON.stringify(values.username));
      return toast.success(`Welcome ${values.username}`);
    } catch (err) {
      return toast.error("There was a problem creating your account");
    }
  }

  if (_action === "createBudget") {
    try {
      // create budget ka helper function
      
      createbudget({
        name:values.newBudget,
        amount:values.newBudgetAmount
      })
      // throw new Error("You Failed ");
      return toast.success(`Budget created !`);
    } catch (e){
      throw new Error("There was a problem creating your budget"); 
    }
  }
}
const DashBoard = () => {
  const { username, budgets } = useLoaderData();

  return (
    <div className="">
      {username ? (
        <div className="dashboard">
          <h1>
            Welcome back <span className="accent">{username}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets?():()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default DashBoard;

import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../Components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../Components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const username = fetchData("username");
  const budgets=fetchData("budgets");
  return { username,budgets };
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formdata = Object.fromEntries(data);
  try {
    localStorage.setItem("username", JSON.stringify(formdata.username));
    return toast.success(`Welcome ${formdata.username}`);
  } catch (err) {
    return toast.error("There was a problem creating your account");
  }
}
const DashBoard = () => {
  const { username ,budgets} = useLoaderData();
  
  return <div className="">{username ? (
    <div className="dashboard">
      <h1>Welcome back <span className="accent">{username}</span></h1>
      <div className="grid-sm">
        {/* {budgets?():()} */}
        <div className="grid-lg">
          <div className="flex-lg">
            <AddBudgetForm  />
          </div>
        </div>
      </div>
    </div>
  
  ): <Intro />}</div>;
};

export default DashBoard;

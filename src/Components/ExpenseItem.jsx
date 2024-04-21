import React from "react";
import { formatCurrency, formatDate, getAllMatchingItems } from "../helpers";
import { Form, Link, useFetcher } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({ expense,showBudget }) => {
  const fetcher=useFetcher();
  const budget= getAllMatchingItems({
    category:"budgets",
    key:"id", 
    value:expense.budgetId  
  })[0];
  return (
    <>
      <td className="">{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDate(expense.createdAt)}</td>

      {
        showBudget && (
          <td><Link 
            to={`budget/${budget.id}`}
            style={{"--accent":budget.color }}
       
          >{budget.name}</Link></td>
        )
      }
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action"  value="deleteExpense"/>
          <input type="hidden" name="expenseId" value={expense.id} />
          <button className="btn btn--warning py-1 px-1 bg-slate-300" type="submit" aria-label={`Delete ${expense.name} expense`}>{<TrashIcon width={25}/>}</button>

        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;

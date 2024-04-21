import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { createExpense, deleteItem, getAllMatchingItems } from '../helpers';
import BudgetItem from '../Components/BudgetItem';
import AddExpenseForm from '../Components/AddExpenseForm';
import Table from '../Components/Table';
import { toast } from 'react-toastify';

export async function budgetLoader({params}){
    const budget=await getAllMatchingItems({
        category:"budgets",
        key:"id",
        value:params.id
    })[0]

    const expenses=await getAllMatchingItems({
        category:"expenses",
        key:"budgetId",
        value:params.id
    })
    if(!budget){
        return new Error("The budget you are trying to access does not exist")
    }

    return {budget,expenses};

}


// actions

export async function budgetAction({request}){
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    if(_action==="createExpense"){
        try{
          // create expense ka helper function
          createExpense({
            name:values.newExpense,
            amount:values.newExpenseAmount,
            budgetId:values.newExpenseBudget
          });
          return toast.success(`Expense ${values.newExpense} added !`);
        }catch(e){
          throw new Error("There was a problem adding your expense");
        }
      }
    

    if(_action==="deleteExpense"){
        try{
          // create expense ka helper function
          deleteItem({
            key:"expenses",
            id:values.expenseId
          });
          return toast.success("Expense deleted !");
        }catch(e){
          throw new Error("There was a problem deleting your expense");
        }
      }
} 




const BudgetPage = () => {
    const {budget,expenses}=useLoaderData();
  return (
    <div className='grid-lg' style={{"--accent":budget.color}}>
        <h1 className='h2'> <span className='accent'>{budget.name}</span> Overview</h1>
        <div className='flex-lg'>
            <BudgetItem budget={budget} showDelete={true}/>
            <AddExpenseForm budgets={[budget]}/>
        </div>
        {
            expenses && expenses.length>0 &&(
                <div className="grid-md">
                    <h2>
                        <span className='accent'>{budget.name}</span> Expenses
                    </h2>
                    <Table expenses={expenses} showBudget={false}/>
                </div>
            )
        }
    </div>
  )
}

export default BudgetPage
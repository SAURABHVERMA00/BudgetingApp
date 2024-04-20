// for disable a button when we submitting
export const waait=()=>{
    return new Promise(res=>setTimeout(res,Math.random()*2000));
}

const generateRandomColor=()=>{
    const existBudgetLength=fetchData("budgets")?.length ?? 0;

    return `${existBudgetLength* 34} 65% 50%`
}
// fetch data 

export const fetchData=(key)=>{
    return JSON.parse(localStorage.getItem(key))
};

// create Budget
export const createbudget=({
    name,amount
})=>{
    const newItem={
        id:crypto.randomUUID(),
        name:name,
        createdAt:Date.now(),
        amount:+amount,
        color:generateRandomColor()
    }

    const existingBudgets=fetchData("budgets") ?? [];
    return localStorage.setItem("budgets",JSON.stringify([...existingBudgets,newItem]))

}



// create Expense 
export const createExpense=({
    name,amount,budgetId
})=>{
    const newItem={
        id:crypto.randomUUID(),
        name:name,
        createdAt:Date.now(),
        amount:+amount,
        budgetId:budgetId
    }

    const existingExpense=fetchData("expenses") ?? [];
    return localStorage.setItem("expenses",JSON.stringify([...existingExpense   ,newItem]))

}



// delete data 
export const deleteUser=({key})=>{
    return localStorage.removeItem(key);
}


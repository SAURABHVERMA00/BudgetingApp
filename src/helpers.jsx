// for disable a button when we submitting
export const waait=()=>{
    return new Promise(res=>setTimeout(res,Math.random()*800));
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

//delete item from local storage
export const deleteItem=({key,id})=>{
    const data=fetchData(key)??[];
    if(id){
        const newData=data.filter((item)=>item.id!==id)
        return localStorage.setItem(key,JSON.stringify(newData));
    }

    return localStorage.removeItem(key);

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


//total expenses
export const calculateTotalExpenses=(budgetId)=>{
    const expenses=fetchData("expenses")??[];
    const budgetSpent= expenses.reduce((acc ,expense)=>{
        if(expense.budgetId!==budgetId) return acc;

        // add the current expense amount in total expense amount;
        return acc+expense.amount;
    },0);

    return budgetSpent;
}




// FORMATTIN

// format date to local string
export const formatDate=(epoch)=>new Date(epoch).toLocaleDateString();

// formatting percentage 
export const formatPercentage=(amt)=>{
    return amt.toLocaleString(undefined,{
        style:"percent",
        minimumFractionDigits:0
    
    })
}   
export const formatCurrency=(amt)=>{
    return amt.toLocaleString(undefined,{
        style:"currency",
        currency: "USD"
    })
}



// get all item from loacal storage 
export const getAllMatchingItems=({category,key,value})=>{
    const data=fetchData(category)??[];
    return data.filter((item)=>item[key]===value);
}
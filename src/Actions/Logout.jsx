import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import {toast} from 'react-toastify';
export async function logOutAction() {
    //delete user 
    deleteItem({key:'username'});
    // deleteItem({key:'budgets'});
    // deleteItem({key:'expenses'});


    toast.success('Logged out successfully');
    // redirect 
    return redirect('/');
    
}
import { redirect } from "react-router-dom";
import { deleteUser } from "../helpers";
import {toast} from 'react-toastify';
export async function logOutAction() {
    //delete user 
    deleteUser({key:'username'});

    toast.success('Logged out successfully');
    // redirect 
    return redirect('/');
    
}
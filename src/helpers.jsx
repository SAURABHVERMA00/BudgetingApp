
// fetch data 

export const fetchData=(key)=>{
    return JSON.parse(localStorage.getItem(key))
};

// delete data 
export const deleteUser=({key})=>{
    return localStorage.removeItem(key);
}


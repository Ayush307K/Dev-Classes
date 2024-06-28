import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../stores/Categories";

function Categories({onSelectCategory}){
    
    let dispatch = useDispatch();
    const categories = useSelector((state)=> state.categories.categories);

    useEffect(()=>{
        dispatch(loadCategories());
    },[])

    
    
    return(
        <div>
            <h1>Category</h1>
            
            <div style={{display: "flex", justifyContent:"space-evenly"}}>
                {categories.map((item,index)=> {
                    return(<h4 onClick={() => onSelectCategory(item.name)} key={index}>{item.name}</h4>)
                })}
            </div>
            
        </div>
    )
}
export default Categories;
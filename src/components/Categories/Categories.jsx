import { useState, useEffect } from "react";
function Categories({onSelectCategory}){
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        fetch("https://667d9edc297972455f65d371.mockapi.io/api/v1/categories/").then(
            (response) => {
                return response.json();
            }
        ).then((res)=>{
            setCategories(res);
        })
    },[])
    console.log(categories);
    return(
        <div>
            <h1>Category</h1>
            <input 
                type="text" 
                placeholder="Search categories..." 
                value={searchTerm} 
                onChange={(event)=>setSearchTerm(event.target.value)} 
                style={{ marginBottom: "10px", padding: "5px", width: "30%" }}
            />
            <div style={{display: "flex", justifyContent:"space-evenly"}}>
                {categories.map((item,index)=> {
                    return(<h4 onClick={() => onSelectCategory(item.name)} key={index}>{item.name}</h4>)
                })}
            </div>
            
        </div>
    )
}
export default Categories;
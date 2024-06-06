
import React, { useState } from 'react'
import { useGlobal } from '../Context/Global';


const search = <i className="fa-solid fa-magnifying-glass"></i>;


function Header({setRendered}) {
    const{getSearch} = useGlobal();
    const[query,setquery] = useState("");
    const handleChange = (e) => {
        setquery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getSearch(query);
        setRendered("Search_Results");
        setquery("");
        if(query === ""){
            setRendered("Home");
        }
    }

  return (
    <div className = "formSection">
        <h1>Personal Bookshelf</h1>
        <form action=""  onSubmit = {handleSubmit}>
            <div className="input-control">
                <input type="text" onChange={handleChange} value={query} placeholder="Search" />
                <button className="submit-btn" >{search}</button>
            </div>
        </form>
    </div>
  )
}

export default Header;


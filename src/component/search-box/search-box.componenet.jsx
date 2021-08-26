import React from 'react';
import './search-box.style.css';
export const SearchBox=({placeholder,field})=>(
    <div className="search-bar">
    <input  type='search' placeholder={placeholder}  onChange={field}/>
    </div>

);
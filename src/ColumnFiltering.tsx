import React from 'react';
export const ColumnFilter=({column}:any)=>{
    const {filterValue,setFilter}=column
return(
    <span>
        {''}
        <input value={filterValue||''}onChange={(e)=>setFilter(e.target.value)}/>
    </span>
)
}
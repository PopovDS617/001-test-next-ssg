import React, { useState } from 'react';

export const SearchBar = ({onSearch}) => {
const [input,setInput]=useState('')

const handleInput=(e)=>{
const text=e.target.value
setInput(text)
console.log(text)
onSearch(text)

}

  return (
    <div className=''>
      <input onChange={handleInput} value={input} className='outline-none border-b-2 p-2 border-slate-300 border-solid' type="text" placeholder='search'/>
    </div>
  );
};

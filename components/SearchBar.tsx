"use client"

import { SearchManufacture } from ".";
import {useState} from 'react';



function SearchBar() {
        const handleSubmit = () => {

        }
        const [manufacture, setManufacture] = useState('')
  return (
        <form 
        className=""
        onSubmit={handleSubmit}>
                <div>
                        <SearchManufacture
                        manufacture = {manufacture}
                        setManufacture = {setManufacture}/>
                </div>

        </form>
  )
}

export default SearchBar;

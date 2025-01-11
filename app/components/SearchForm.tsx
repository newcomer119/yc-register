import React from 'react'
import Form from "next/form"
import SearchFormReset from './SearchFormReset';
import { SearchIcon } from 'lucide-react';
const SearchForm = ({query}: {query?: string}) => {
  return (
    <Form action="/" scroll={false} className="search-form">
        <input type="text"
            name="query"
            defaultValue={query}
            placeholder="Search for a startup"
            className="search-input"
         />
         <div className="flex gap-2">
            {query && <SearchFormReset/>}
            <button type="submit" className="search-btn text-white">
                <SearchIcon className='size-5'/>
            </button>
         </div>
    </Form>
  )
}

export default SearchForm
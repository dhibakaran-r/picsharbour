import React from 'react'
import './Search.css'
import { FiSearch } from 'react-icons/fi'

function Search() {
    return (
        <>
            <input type="text" placeholder="search" className="search_input" />
            <span className="search_icon">
                <FiSearch />
            </span>
        </>
    )
}

export default Search
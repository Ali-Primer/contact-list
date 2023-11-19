import { useState } from "react"

export const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState("")
    const searchHandle = ({ target }) => {
        setSearch(target.value);
        onSearch(target.value);
    };

    return (
        <div className="searchBar">
            <input placeholder="Search here..." type="search" value={search} onChange={searchHandle} />
        </div>
    )
}
import React, { useRef, useEffect, useState } from 'react'
import './SearchBar.scss'

function SearchBar({ searchTerm, setSearchTerm }) {
  const [state, setState] = useState("");
  const searchRef = useRef();
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div className="searchBar">
      <input className="searchField"
        ref={searchRef}
        type='text'
        placeholder='Search the galaxy...'
        onChange={(event) => setState(event.currentTarget.value)}
        value={state}
      />
    </div>
  )
}

export default SearchBar

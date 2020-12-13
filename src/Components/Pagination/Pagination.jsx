import React from 'react'
import './Pagination.scss';

import SearchBar from '../SearchBar/SearchBar';

function Pagination({ people, searchTerm, setSearchTerm, page, setPage }) {

  return (
    <div>
      <div className="pagination">
        <button onClick={() => setPage(
          old => Math.max(old -1, 1))}
          disabled={page === 1}
          >Prev</button>
        <SearchBar 
          people={people} 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} 
        />
        <p className="page-number">{`Page ${page}`}</p>
        <button onClick={() => setPage(old => (!people || !people.next ? old : old +1))}
        disabled={!people || !people.next}
        >Next</button>
      </div>
    </div>  
  )
}

export default Pagination

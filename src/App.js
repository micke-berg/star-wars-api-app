import { useState, useEffect } from 'react';
import axios from "axios";
import './App.scss';
import List from './Components/List/List';
import Spinner from './Components/Spinner/Spinner';
import Pagination from './Components/Pagination/Pagination';
import Header from './Components/Header/Header';


const BASE_URL =
  "https://swapi.dev/api";
const SEARCH_BASE_URL =
  "https://swapi.dev/api/people/?search=";
const initialState = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};

function App() {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPeople(searchTerm, page) {
      const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}`
      : `${BASE_URL}/people/?page=${page}`;
      try {

        setError(false);
        setLoading(true);

        const res = await axios.get(endpoint);
        setPeople(res.data);
      } catch (error) {
        setError(true);
      }
    }
    fetchPeople(searchTerm, page);
    setLoading(false);
  }, [searchTerm, page]);

  return (
    <div className="App">
      <Header />
      <Pagination 
        people={people} 
        page={page} 
        setPage={setPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} >
      </Pagination>
      {loading ? <Spinner /> : <List people={people} loading={loading} ></List>}
    </div>
  );
}

export default App;

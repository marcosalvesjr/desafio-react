import { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination';


function App() {

  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [genders, setGenders] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);



  const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&gender=${genders}&status=${status}`;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setCharacters(data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setGenders("");
        setStatus("");
        setSearch("");
        setPageNumber(1);
      }


    }
    fetchCharacters();
  }, [pageNumber, search, genders, status])
  return (
    <>
      <Header />
      <Form setStatus={setStatus} setGenders={setGenders} setPageNumber={setPageNumber} search={search} setSearch={setSearch} />
      <CharacterCard characters={characters} />
      <Pagination prevPage={pageNumber} setPageNumber={setPageNumber} />
    </>
  )
}

export default App

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
  const [status, setStatus] = useState('')



  let url = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&gender=${genders}&status=${status}`;
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchCharacters();
  }, [pageNumber, search, genders, status])
  return (
    <>
      <Header />
       <Form setStatus={setStatus} setGenders={setGenders} characters={characters} setPageNumber={setPageNumber} search={search} setSearch={setSearch} />
      <CharacterCard characters={characters} />
      <Pagination prevPage={pageNumber} setPageNumber={setPageNumber} />




    </>
  )
}

export default App

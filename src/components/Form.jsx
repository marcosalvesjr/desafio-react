//import React, { useState } from 'react';
import './Form.css';

const Form = ({ setStatus, setGenders, search, setSearch, setPageNumber }) => {

  const handleInputChange = (e) => {
    setSearch(e.target.value);


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageNumber(1)
  };

  const handleCheckRadio = (e) => {
    setGenders(e.target.value)
    setPageNumber(1)
  };

  const handleCheckRadioStatus = (e) => {
    setStatus(e.target.value)
    setPageNumber(1)
  };

  const handleClickCleanFilter = () => {
    setGenders("");
    setStatus("");
    setSearch("");
    setPageNumber(1)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='form-group'>
          <span>Buscar: </span>
          <input
            type="text"
            id="searchText"
            name="searchText"
            value={search}
            onChange={handleInputChange}
            placeholder="Digite o nome"
          />
        </label>

        <label>
          <select  name="gender" id="gender" onChange={handleCheckRadio}>
            <option value="" disabled selected>Selecione o genero</option>
            <option value="male">Homem</option>
            <option value="female">Mulher</option>
            <option value="unknow">Desconhecido</option>
            <option value="">Todos</option>
          </select>
        </label>

        <label>
          <select  name="status" id="status" onChange={handleCheckRadioStatus} >
            <option value="" disabled selected>Selecione o status</option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknow">Desconhecido</option>
            <option value="">Todos</option>
          </select>
        </label>

        {/*<label>
          <select placeholder="Selecione o status" name="species" id="species" onChange={handleCheckRadio}>
            <option value="alive">Homem</option>
            <option value="dead">mulher</option>
            <option value="unknow">desconhecido</option>
            <option value="unknow">desconhecido</option>
          </select>
        </label>*/}
        <p className='clean-filter' onClick={handleClickCleanFilter}>Limpar filtro</p>
      </div>


      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
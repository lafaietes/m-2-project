// src/pages/Customers.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import CustomerList from '../components/CustomerList';

function Customers() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure?');

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/users/${id}`);
        const updatedData = data.filter((user) => user.id !== id);
        setData(updatedData);
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      return; // Não permitir pesquisa se o campo de busca estiver vazio
    }

    // Filtrar os clientes com base no termo de busca
    const filteredData = data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Verificar se foram encontrados resultados
    if (filteredData.length === 0) {
      setSearchNotFound(true);
    } else {
      setSearchNotFound(false);
    }

    // Exibir os clientes filtrados
    setSearchResults(filteredData);
  };

  const handleDetails = (id) => {
    // Redirecionar para a página de detalhes do cliente
    navigate(`/read/${id}`);
  };

  const handleBackToList = () => {
    // Reset search results to show all data
    setSearchResults([]);
    // Clear search term
    setSearchTerm('');
    // Reset search not found state
    setSearchNotFound(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="d-flex flex-column justify-content align-items-center bg-light vh-100">
      <div id="top"></div>

      <h1>Customers List</h1>

      <div className="mb-3 d-flex align-items-center">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchNotFound && (
        <div className="alert alert-warning" role="alert">
          No results found. Please try again.
        </div>
      )}

      <div className="mb-3">
        <Link to="/create" className="btn btn-success me-2">
          Register
        </Link>
        <Link to="/" className="btn btn-warning me-2">
          Homepage
        </Link>
        {searchResults.length > 0 && (
          <button className="btn btn-light border" onClick={handleBackToList}>
            Back to List
          </button>
        )}
      </div>

      <CustomerList
        data={data}
        searchResults={searchResults}
        handleDetails={handleDetails}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Customers;

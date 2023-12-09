import React, { useState, useEffect } from 'react';
import Filtro from '../components/filtro';
import Table from '../components/table';

const SuaPagina = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams, setSearchParams] = useState({});

  useEffect(() => {
    // Lógica para obter dados filtrados com base em searchParams
    const fetchFilteredData = async () => {
      try {
        // Construa dinamicamente a URL com base nos parâmetros de filtro
        const queryParams = new URLSearchParams(searchParams).toString();
        console.log('queryParams: ', queryParams);
        const response = await fetch(`http://localhost:3001/projects?${queryParams}`);
        const filteredData = await response.json();
        setFilteredData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilteredData();
  }, [searchParams]);

  return (
    <div>
      {/* Componente Filtro */}
      <Filtro setSearchParams={setSearchParams} />

      {/* Componente Table com dados filtrados */}
      <Table filteredData={filteredData} />
    </div>
  );
};

export default SuaPagina;



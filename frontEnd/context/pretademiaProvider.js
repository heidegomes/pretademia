// Criando um arquivo chamado "AppState.js"
import { useEffect, useState, useMemo } from 'react';
import PretademiaContext from './pretademiaContext';

const PretademiaProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [queryParams, setQueryParams] = useState('');



  const value = useMemo(() => ({ filteredData, setQueryParams }), [filteredData, setQueryParams]);

  return (
    <PretademiaContext.Provider value={value}>
      {children}
    </PretademiaContext.Provider>
  );
};

module.exports = {
  PretademiaProvider,
};
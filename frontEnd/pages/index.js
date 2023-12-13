import React from 'react';
import Filtro from '../components/filtro';
import Table from '../components/table';
import PretademiaProvider from '../context/pretademiaProvider';

const Home = () => {
  return (
    <PretademiaProvider>
      <Filtro />
      <Table />
    </PretademiaProvider>
  );
};
export default Home;



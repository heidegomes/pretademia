// Client component
import React, { useEffect, useState } from 'react';
import styles from './filtro.module.css';
import { useRouter } from 'next/router';


const Filtro = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRegiao, setSelectedRegiao] = useState('');
  const [selectedUF, setSelectedUF] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await fetch('http://localhost:3001/projects');
        const projectsData = await projects.json();
        setData(projectsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  const handleFilter = () => {  // Aplica o filtro apenas quando o botão é clicado
    const queryParams = {};

    if (selectedYear) queryParams.ano = selectedYear;
    if (selectedRegiao) queryParams.regiao = selectedRegiao;
    if (selectedUF) queryParams.uf = selectedUF;

    router.push({
      pathname: '/',
      query: queryParams,
    });
  };

  const years = []
  for (let i = 1987; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }

  const regions = [
    'Centro-Oeste',
    'Nordeste',
    'Norte',
    'Sudeste',
    'Sul',
  ];

  const uf = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO',
  ]

  return (
    <div className={styles.filtro_container}>
      <div>
        <label htmlFor="ano">Ano:
          <select
            name="ano"
            id="ano"
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((e) => (
              <option value={e} name={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="regiao">Região:
          <select
            name="regiao"
            id="regiao"
            onChange={(e) => setSelectedRegiao(e.target.value)}
          >
            {regions.map((r) => (
              <option value={r} name={r} key={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="uf">UF:
          <select
            name="uf"
            id="uf"
            onChange={(e) => setSelectedUF(e.target.value)}
          >
            {uf.map((e) => (
              <option value={e} name={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <button type="button" onClick={handleFilter}>
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default Filtro;

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
  const [entidadeEnsinoData, setEntidadeEnsinoData] = useState([]);
  const [selectedEntidadeEnsino, setSelectedEntidadeEnsino] = useState('');
  const [programaData, setProgramaData] = useState([]);
  const [selectedPrograma, setSelectedPrograma] = useState('');
  const [grandeAreaConhecimentoData, setGrandeAreaConhecimentoData] = useState([]);
  const [selectedGrandeAreaConhecimento, setSelectedGrandeAreaConhecimento] = useState('');
  const [areaConhecimentoData, setAreaConhecimentoData] = useState([]);
  const [selectedAreaConhecimento, setSelectedAreaConhecimento] = useState('');
  const [areaAvaliacaoData, setAreaAvaliacaoData] = useState([]);
  const [selectedAreaAvaliacao, setSelectedAreaAvaliacao] = useState('');


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

    const fetchEntidadeEnsino = async () => {
      try {
        const entidadeEnsino = await fetch('http://localhost:3001/entidadeEnsino');
        const entidadeEnsinoData = await entidadeEnsino.json();
        setEntidadeEnsinoData(entidadeEnsinoData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntidadeEnsino();

    const fetchPrograma = async () => {
      try {
        const programa = await fetch('http://localhost:3001/programa');
        const programaData = await programa.json();
        setProgramaData(programaData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrograma();

    const fetchGrandeAreaConhecimento = async () => {
      try {
        const grandeAreaConhecimento = await fetch('http://localhost:3001/grandeAreaConhecimento');
        const grandeAreaConhecimentoData = await grandeAreaConhecimento.json();
        setGrandeAreaConhecimentoData(grandeAreaConhecimentoData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGrandeAreaConhecimento();

    const fetchAreaConhecimento = async () => {
      try {
        const areaConhecimento = await fetch('http://localhost:3001/areaConhecimento');
        const areaConhecimentoData = await areaConhecimento.json();
        setAreaConhecimentoData(areaConhecimentoData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAreaConhecimento();

    const fetchAreaAvaliacao = async () => {
      try {
        const areaAvaliacao = await fetch('http://localhost:3001/areaAvaliacao');
        const areaAvaliacaoData = await areaAvaliacao.json();
        setAreaAvaliacaoData(areaAvaliacaoData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAreaAvaliacao();

  }, []);

  const handleFilter = () => {  // Aplica o filtro apenas quando o botão é clicado
    const queryParams = {};

    if (selectedYear) queryParams.ano = selectedYear;
    if (selectedRegiao) queryParams.regiao = selectedRegiao;
    if (selectedUF) queryParams.uf = selectedUF;
    if (selectedEntidadeEnsino) queryParams.entidade_ensino = selectedEntidadeEnsino;

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
        <label htmlFor="entidade_ensino">Entidade de Ensino:
          <select
            name="entidade_ensino"
            id="entidade_ensino"
            onChange={(e) => setSelectedEntidadeEnsino(e.target.value)}
          >
            {entidadeEnsinoData.map((e) => (
              <option value={e.entidade_ensino} name={e.entidade_ensino} key={e.entidade_ensino}>
                {e.entidade_ensino}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="programa">Programa:
          <select
            name="programa"
            id="programa"
            onChange={(e) => setSelectedPrograma(e.target.value)}
          >
            {programaData.map((e) => (
              <option value={e.programa} name={e.programa} key={e.programa}>
                {e.programa}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="grande_area_conhecimento">Grande Área de Conhecimento:
          <select
            name="grande_area_conhecimento"
            id="grande_area_conhecimento"
            onChange={(e) => setSelectedGrandeAreaConhecimento(e.target.value)}
          >
            {grandeAreaConhecimentoData.map((e) => (
              <option value={e.grande_area_conhecimento} name={e.grande_area_conhecimento} key={e.grande_area_conhecimento}>
                {e.grande_area_conhecimento}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="area_conhecimento">Área de Conhecimento:
          <select
            name="area_conhecimento"
            id="area_conhecimento"
            onChange={(e) => setSelectedAreaConhecimento(e.target.value)}
          >
            {areaConhecimentoData.map((e) => (
              <option value={e.area_conhecimento} name={e.area_conhecimento} key={e.area_conhecimento}>
                {e.area_conhecimento}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="area_avaliacao">Área de Avaliação:
          <select
            name="area_avaliacao"
            id="area_avaliacao"
            onChange={(e) => setSelectedAreaAvaliacao(e.target.value)}
          >
            {areaAvaliacaoData.map((e) => (
              <option value={e.area_avaliacao} name={e.area_avaliacao} key={e.area_avaliacao}>
                {e.area_avaliacao}
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

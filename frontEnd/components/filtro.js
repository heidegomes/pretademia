import React, { useState, useEffect } from 'react';
import { requestData } from '../services/requests';
import Loading from './loading';
import styles from './filtro.module.css'

function Filtro() {
  const [projects, setProjects] = useState([]);

  const getProjects = (endpoint) => requestData(endpoint)
    .then((response) => setProjects(response))
    .catch((error) => console.log(error));

  useEffect(() => {
    const endpoint = '/projects';
    if (!projects.length) {
      getProjects(endpoint);
    }
  }, [projects]);

  if (!projects.length) {
    return (<Loading />);
  }

  return (
    <div className={styles.filtro_container}>
      <div>
        <label for="ano">Ano:
          <select name="ano" id="ano">
            {projects.map((e) => <option value={e} name={e} key={e}>{e}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label for="regiao">Região:
          <select name="regiao" id="regiao">
            {projects.map((e) => <option value={e} name={e} key={e}>{e}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label for="uf">UF:
          <select name="uf" id="uf">
            {projects.map((e) => <option value={e} name={e} key={e}>{e}</option>)}
          </select>
        </label>
      </div>
      <button type="button">Filtrar</button>
    </div>
  )
}

export default Filtro;
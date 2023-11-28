import api from '../services/requests';
import styles from './table.module.css'

function Table() {
  //   const { data } = api.get(data);
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Região</th>
            <th>UF</th>
            {/* <th>Entidade de Ensino</th>
            <th>Disponível para Download</th>
            <th>Programa</th>
            <th>Grande Área do Conhecimento</th>
            <th>Área do Conhecimento</th>
            <th>Área de Avaliação</th>
            <th>Discente</th>
            <th>Projeto</th>
            <th>Grau Acadêmico</th>
            <th>Palavra-Chave</th>
            <th>Resumo</th>
            <th>Linha de Pesquisa</th>
            <th>Orientador</th>
            <th>Nome da UF da IES</th>
            <th>On-line</th>
            <th>Hyperlink</th> */}
          </tr>
        </thead>
        <tbody>
          <tr key="projeto">
            <td>ano</td>
            <td>regiao</td>
            <td>uf_ies</td>
            {/* <td>entidade_ensino</td>
            <td>disponivel_dowload</td>
            <td>programa</td>
            <td>grande_area_conhecimento</td>
            <td>area_conhecimento</td>
            <td>area_avaliacao</td>
            <td>discente</td>
            <td>projeto</td>
            <td>grau_academico</td>
            <td>palavra_chave</td>
            <td>resumo</td>
            <td>linha_pesquisa</td>
            <td>orientador</td>
            <td>nm_uf_ies</td>
            <td>on_line</td>
            <td>hyperlink</td> */}
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Table;
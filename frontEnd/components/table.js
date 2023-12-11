// Server component - Table.js
import styles from './table.module.css';

const Table = ({ filteredData }) => {
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Região</th>
            <th>UF</th>
            <th>Entidade de Ensino</th>
            {/* Adicione outros cabeçalhos conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.ano}</td>
              <td>{item.regiao}</td>
              <td>{item.uf_ies}</td>
              <td>{item.entidade_ensino}</td>
              {/* Adicione outras células conforme necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

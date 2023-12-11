const connection = require('./connection');

const getAll = async (object) => {
  const { id, ano, regiao, uf_ies, entidade_ensino,
    disponivel_download, programa, grande_area_conhecimento,
    area_conhecimento, area_avaliacao, discente, projeto, grau_academico,
    palavra_chave, resumo, linha_pesquisa, orientador, nm_uf_ies, on_line,
    hyperlink } = object;

  let { limit, offset } = object;

  let query = 'SELECT * FROM teses_validadas WHERE 1=1';
  const values = [];
  if (ano != null) {
    query += ' AND ano = ?';
    values.push(ano);
  }
  if (regiao != null) {
    query += ' AND regiao = ?';
    values.push(regiao);
  }
  if (uf_ies != null) {
    query += ' AND uf_ies = ?';
    values.push(uf_ies);
  }
  if (entidade_ensino != null) {
    query += ' AND entidade_ensino = ?';
    values.push(entidade_ensino);
  }
  if (disponivel_download != null) {
    query += ' AND disponivel_download = ?';
    values.push(disponivel_download);
  }
  if (programa != null) {
    query += ' AND programa = ?';
    values.push(programa);
  }
  if (grande_area_conhecimento != null) {
    query += ' AND grande_area_conhecimento = ?';
    values.push(grande_area_conhecimento);
  }
  if (area_conhecimento != null) {
    query += ' AND area_conhecimento = ?';
    values.push(area_conhecimento);
  }
  if (area_avaliacao != null) {
    query += ' AND area_avaliacao = ?';
    values.push(area_avaliacao);
  }
  if (discente != null) {
    query += ' AND discente = ?';
    values.push(discente);
  }
  if (projeto != null) {
    query += ' AND projeto = ?';
    values.push(projeto);
  }
  if (grau_academico != null) {
    query += ' AND grau_academico = ?';
    values.push(grau_academico);
  }
  if (palavra_chave != null) {
    query += ' AND palavra_chave = ?';
    values.push(palavra_chave);
  }
  if (resumo != null) {
    query += ' AND resumo = ?';
    values.push(resumo);
  }
  if (linha_pesquisa != null) {
    query += ' AND linha_pesquisa = ?';
    values.push(linha_pesquisa);
  }
  if (orientador != null) {
    query += ' AND orientador = ?';
    values.push(orientador);
  }
  if (nm_uf_ies != null) {
    query += ' AND nm_uf_ies = ?';
    values.push(nm_uf_ies);
  }
  if (on_line != null) {
    query += ' AND on_line = ?';
    values.push(on_line);
  }
  if (hyperlink != null) {
    query += ' AND hyperlink = ?';
    values.push(hyperlink);
  }

  if (!limit) {
    limit = 10;
  }
  if (!offset) {
    offset = 0;
  }
  values.push(limit);
  values.push(offset);

  query += ' LIMIT ? OFFSET ?';

  const [result] = await connection.execute(query, values);
  // console.log(result);
  return result;
};

const getEntidadeEnsino = async () => {
  const query = 'SELECT DISTINCT entidade_ensino FROM teses_validadas ORDER BY entidade_ensino; ';
  const [result] = await connection.execute(query);
  return result;
}

const getPrograma = async () => {
  const query = 'SELECT DISTINCT programa FROM teses_validadas ORDER BY programa; ';
  const [result] = await connection.execute(query);
  return result;
}

module.exports = {
  getAll,
  getEntidadeEnsino,
  getPrograma,
};  
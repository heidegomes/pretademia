const projectsService = require('../services/projectsService');

const getAll = async (req, res) => {

  const object = {
    id: req.query.id,
    ano: req.query.ano,
    regiao: req.query.regiao,
    uf_ies: req.query.uf_ies,
    entidade_ensino: req.query.entidade_ensino,
    disponivel_download: req.query.disponivel_download,
    programa: req.query.programa,
    grande_area_conhecimento: req.query.grande_area_conhecimento,
    area_conhecimento: req.query.area_conhecimento,
    area_avaliacao: req.query.area_avaliacao,
    discente: req.query.discente,
    projeto: req.query.projeto,
    grau_academico: req.query.grau_academico,
    palavra_chave: req.query.palavra_chave,
    resumo: req.query.resumo,
    linha_pesquisa: req.query.linha_pesquisa,
    orientador: req.query.orientador,
    nm_uf_ies: req.query.nm_uf_ies,
    on_line: req.query.on_line,
    hyperlink: req.query.hyperlink,
    limit: req.query.limit,
    offset: req.query.offset,
  };

  const result = await projectsService.getAll(object);
  res.status(200).json(result);
};

const getEntidadeEnsino = async (_req, res) => {
  const result = await projectsService.getEntidadeEnsino();
  res.status(200).json(result);
}

const getPrograma = async (_req, res) => {
  const result = await projectsService.getPrograma();
  res.status(200).json(result);
}

module.exports = {
  getAll,
  getEntidadeEnsino,
  getPrograma,
};  
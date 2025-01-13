
/* Convert xlsx to Json */
const fs = require('fs');
const convertExcelToJson = require('convert-excel-to-json');

const excelToJsonConfig = {
  sourceFile: 'tesesvalidadas_mulheresnegras_16022022.xlsx',
  columnToKey: {
    "*": "{{columnHeader}}"
  }
};

const result = convertExcelToJson(excelToJsonConfig);

const outputFile2 = 'output2.json';
fs.writeFileSync(outputFile2, JSON.stringify(result, null, 2), 'utf-8');

console.log(`Resultado da conversão salvo em ${outputFile2}`);

/* Transforma os dados para o formato sql */

const data = require('./output.js');

function formatValue(value) {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
}

function getValues(data) {
  const values = [];
  for (let index = 0; index < data.length; index += 1) {
    const objValues = Object.values(data[index]);
    const formattedLine = `(${objValues.map(formatValue).join(', ')}),`; 
    values.push(formattedLine);
  }
  return values;
}

const valuesData = getValues(data);

const outputFile = 'data.txt'; 

fs.writeFileSync(outputFile, valuesData.join('\n'), 'utf-8');

console.log(`Resultado da conversão salvo em ${outputFile}`);

/* Verifica se todos os objetos possuem o mesmo número de chaves */

const data = require('./output.js');

function têmMesmoNúmeroDeChaves(data) {
  if (data.length === 0) {
    return true;
  }

  const primeiroObjeto = data[0];
  const númeroDeChaves = Object.keys(primeiroObjeto).length;

  for (let i = 1; i < data.length; i++) {
    const objetoAtual = data[i];
    if (Object.keys(objetoAtual).length !== númeroDeChaves) {
      return false; 
    }
  }

  return true; 
}

console.log(têmMesmoNúmeroDeChaves(data));
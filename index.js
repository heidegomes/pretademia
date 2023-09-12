// 'use strict';
// const excelToJson = require('convert-excel-to-json');

// const result = excelToJson({
//   sourceFile: 'tesesvalidadas_mulheresnegras_16022022.xlsx',
//   columnToKey: {
//     "*": "{{columnHeader}}"
//   }
// });

// console.log(result)


const fs = require('fs');

const convertExcelToJson = require('convert-excel-to-json');

// Configuração da conversão
const excelToJsonConfig = {
  sourceFile: 'tesesvalidadas_mulheresnegras_16022022.xlsx',
  columnToKey: {
    "*": "{{columnHeader}}"
  }
};

// Converte o arquivo Excel para JSON
const result = convertExcelToJson(excelToJsonConfig);

// // Escreve o resultado em um arquivo JSON
const outputFile = 'output.json';

fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Resultado da conversão salvo em ${outputFile}`);








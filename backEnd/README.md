# Pretademia - Backend

Este é o backend do projeto Pretademia. Ele utiliza Node.js com Express, banco de dados MySQL e dependências gerenciadas pelo npm. Para facilitar a execução, também é possível rodá-lo usando Docker.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão recomendada: 16 ou superior)
- [npm](https://www.npmjs.com/) (normalmente incluído com o Node.js)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- Banco de dados MySQL rodando localmente ou configurado no Docker

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/heidegomes/pretademia.git
   cd pretademia/backEnd
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (ajuste conforme necessário):
     ```env
     DB_HOST=localhost
     DB_PORT=3306
     DB_USER=root
     DB_PASSWORD=suaSenha
     DB_NAME=pretademia
     PORT=3001
     ```

4. Certifique-se de que o banco de dados MySQL está rodando e que o banco de dados `pretademia` foi criado.
   ```sql
   CREATE DATABASE pretademia;
   ```

## Executando o Projeto

### Localmente

1. Inicie o servidor em modo de desenvolvimento (com recarregamento automático):
   ```bash
   npm run dev
   ```

2. Ou, para iniciar o servidor em modo de produção:
   ```bash
   npm start
   ```

3. A API estará disponível em `http://localhost:3001`.

### Com Docker

1. Certifique-se de que o Docker está instalado e rodando.
2. Suba os contêineres com o Docker Compose:
   ```bash
   docker-compose up
   ```
3. A API estará disponível em `http://localhost:3001`.

## Testando a API

Use ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar os endpoints da API.

## Logs de Erro

Se ocorrer algum erro, verifique os logs exibidos no terminal. Problemas comuns incluem:
- MySQL não está rodando ou configurado incorretamente
- Credenciais incorretas no arquivo `.env`
- Porta 3001 já em uso

## Comandos Úteis

- Instalar dependências: `npm install`
- Rodar em modo de desenvolvimento: `npm run dev`
- Rodar em modo de produção: `npm start`
- Subir o projeto com Docker: `docker-compose up`
- Derrubar o projeto com Docker: `docker-compose down`

## Contato

Se precisar de ajuda, entre em contato comigo no GitHub: [heidegomes](https://github.com/heidegomes).


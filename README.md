# ci

## 🚀 Projeto
Integração contínua (CI) de um repositório GitHub para o DockerHub (Registro de Containers Docker).
Projeto desenvolvido no curso "Next Level Week - Journey - Trilha DevOps" da @Rocketseat em jul/24.

## 🛠️ Tecnologias
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com)

## 🧊 Cool features:
- Montagem da imagem docker do projeto usando Github Actions, automaticamente a cada atualização da branch main.
- Dockerfile usando multistage build, para uma imagem mais otimizada, leve, e segura.

## 🗂️ Utilização

### 🐑🐑 Clonando o repositório:

```bash
  $ git clone url-do-projeto.git
```

### ▶️ Rodando o App:
```bash
  $ cd ci            #change to that directory
  $ npm install      #download dependencies to node_modules
  $ npm run dev_js   #start the javascript project
  $ npm run dev_ts   #start the typescript project
```
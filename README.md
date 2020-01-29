# bootcampo-modulo01
GoStack Bootcamp: Ambiente e Conceitos

# Fase 02: Criando Aplicação
<mkdir modulo01>
<cd mkdir modulo01>

# Adiciona o versionamento
<git init>

# Adiciona o reposiótio remoto
<git remote add origin https://github.com/JoaoRomeiro/bootcamp-modulo01.git>

# Atualiza o projeto local
<git pull origin master>

# Cria o arquivo .gitignore para não rastrear certos arquivos e pastas
<New-Item -Path '.gitignore' -ItemType File>

# Cria o arquivo package.json, que será responsável por gerenciar as dependências que forem instaladas via npm ou yarn
<yarn init -y>

# Instala o express, que é o framework que será utilizado no projeto
<yarn add express> 

# Edita o arquivo .gitignore para não rastrear a pasta node_modules

# Cria o arquivo index.js
<New-Item -Path 'index.js' -ItemType File>

# Commit
<git add .>
<git commit -m "Fase 02: Criando Aplicação">

# Envia as alterações para o respositório remoto
<git push -u origin master>

# Fase 02: Query & Route params

Existem 3 tipos de parametros
Query params: ?pagina=2
Route params: /users/1
Request body: {"name": "Joao", "email": "j.romeiro@live.com"}

# Commit
<git add .>
<git commit -m "Fase 02: Query & Route params">

# Envia as alterações para o respositório remoto
<git push>

# Fase 02: Utilizando Insominia

# Commit
<git add .>
<git commit -m "Fase 02: Utilizando Insominia">

# Envia as alterações para o respositório remoto
<git push>

# Fase 02: Utilizando Nodemon

Instala o nodemon para que não seja mais necessário reiniciar o servidor toda vez que o projeto sofrer alguma alteração
O parametro -D informa que o nodemon será instalado apenas no ambiente de desenvolvimento
<yarn add nodemon -D>

Cria o atalho dev na propriedade scripts dentro do arquivo package.json

Para executar iniciar o servidor através de dev
<yarn dev>

# Commit
<git add .>
<git commit -m "Fase 02: Utilizando Nodemon">

# Envia as alterações para o respositório remoto
<git push>

# Fase 02: CRUD

CRUD: Create, Read, Update, Delete

# Commit
<git add .>
<git commit -m "Fase 02: CRUD">

# Envia as alterações para o respositório remoto
<git push>

# Fase 02: Middlewares

Middlewares são funções que recebem o req (request) e o res (response) e manipulam essas informações de alguma forma

Diante disso, podemos entender que o segundo parametro de todas as rotas criadas no arquivo index.js são Middlewares

Middleware global é um middleware que sempre será chamado, não importa a rota

Os middlewares podem alterar os parametros req (request) e res (response)

# Commit
<git add .>
<git commit -m "Fase 02: Middlewares">

# Envia as alterações para o respositório remoto
<git push>
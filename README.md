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
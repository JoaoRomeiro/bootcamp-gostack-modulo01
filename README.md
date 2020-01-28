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

# commit
<git add .>
<git commit -m "Fase 02: Criando Aplicação">
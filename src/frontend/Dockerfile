# Use uma imagem de node.js como base
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

RUN npm run build

# Exponha a porta 5173 para acessar a aplicação React
EXPOSE 4173

# Comando para iniciar a aplicação React
CMD ["npm","run","preview"]

# Use uma imagem base Node.js
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /backend

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação Express irá escutar
EXPOSE 3002

# Exponha a porta onde o Prometheus poderá acessar as métricas
EXPOSE 3001

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["sh", "migrate-and-start.sh"]
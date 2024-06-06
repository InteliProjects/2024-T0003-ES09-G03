# Backend - Trackinos

## Como inicializar o backend da nossa aplicação.

Crie primeiro o arquivo <code>.env</code> na root do projeto com as seguintes variáveis.

O seu arquivo .env terá informações de configuração do Auth0, que foi a biblioteca de autenticação de login usada no projeto. O seu arquivo precisa conter as variáveis abaixo:

```js
DATABASE_URL="postgresql://postgres:postgres@database:5432/postgres"
```

O nosso backend precisa ter o banco de dados rodando para executar certas funcionalidades, logo você pode ter um banco Postgress rodando em algum lugar e referênciar a conexão na variável de ambiente.

Primero vamos mostrar como executar o backend com o banco de dados, e logo em seguida como executar a o backend com banco, grafana e prometheus.

### Backend + Database

Após ter colocado o <code>.env</code> você pode estar gerando o build do backend e iniciando o docker com a imagem dele.

```bash
docker build -t backend-trackinos .
```

```bash
docker run -p 3001:3001 -p 3002:3002 backend-trackinos
```

para verificar se deu tudo certo, pode estar acessando esse endpoint: http://localhost:3002/health

### Backend + Database + Prometheus + Grafana

Após ter colocado o <code>.env</code> você pode estar seguindo com os comandos 

```bash
docker compose up
```

para verificar se deu tudo certo, pode estar acessando esse endpoint: http://localhost:3002/health


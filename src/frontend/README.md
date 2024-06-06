# Frontend - Trackinos

## Como inicializar o frontend da nossa aplicação.

Crie primeiro o arquivo <code>.env</code> na root do projeto com as seguintes variáveis.

O seu arquivo .env terá informações de configuração do Auth0, que foi a biblioteca de autenticação de login usada no projeto. O seu arquivo precisa conter as variáveis abaixo:

```js
VITE_AUTH0_DOMAIN="informação fornecida pelo auth0.us.auth0.com" 
VITE_AUTH0_CLIENT_ID="informação fornecida pelo auth0"
```

Após ter criado o <code>.env</code>, você pode executar os próximos comandos para iniciar a aplicação localmente.

```bash
npm run build
```
```bash
npm run preview
```

ou utilizando o Docker

```bash
docker build -t frontend-trackinos .
```

```bash
docker run -p 4173:4173 frontend-trackinos
```


Após executar esses comandos é possivel acessar a aplicação no http://localhost:4173/ 🐱‍🐉
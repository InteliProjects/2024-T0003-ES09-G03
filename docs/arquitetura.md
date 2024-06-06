# Trackinos - Construção de testes automatizados e controle de qualidade de software

**Nome do projeto:** projeto de construção de testes automatizados e controle de qualidade de software

**Nome do parceiro:** Track.co

**Nome do grupo:** Trackinos

**Integrantes do grupo:** Abner Barbosa, Arthur Fraige, Carolina Fricks, Emanuel de Oliveira, Pedro Gattai, Raíssa Sabino, Sofia Pimazzoni, Yves Lapa.

### **Conteúdo**

- [Requisitos funcionais](#requisitos-funcionais)
- [Diagrama C4 model](#diagrama-c4-model)
- [Implementação do frontend e práticas de segurança](#implementação-do-frontend-e-práticas-de-segurança)
- [Instruções de execução do projeto](#instruções-de-execução-do-projeto)
- [Documentação da API com Swagger](#documentação-da-api-com-swagger)
- [Testes unitários - frontend](#testes-unitários---frontend)
- [Testes de integração](#testes-de-integração)
- [Instruções para a Execução de Testes de Caixa Preta](#instruções-para-a-execução-de-testes-de-caixa-preta)
- [Sonarqube](#sonarqube)
- [Instruções de Instalação e Execução dos Testes de Carga com k6](#instruções-de-instalação-e-execução-dos-testes-de-carga-com-k6)
- [Dashboard com Grafana](#dashboard-com-grafana)

# Requisitos funcionais

Os requisitos funcionais desempenham um papel fundamental no desenvolvimento e na implementação bem-sucedida de sistemas e software. Eles representam as funcionalidades específicas e as características operacionais que um sistema deve fornecer para atender às necessidades e expectativas dos usuários, clientes e demais partes interessadas. 

## Requisito funcional 1

Considerando o caso de uso citado acima, o primeiro requisito funcional é: "Eu como funcionário devo ser capaz de enviar as pesquisas aos meus clientes selecionados via Whatsapp, para que posteriormente eu possa entender o quão satisfeitos os meus clientes estão com a empresa". Aqui abaixo está uma explicação mais aprofundada do mesmo, o que facilita a compreensão do seu significado e objetivo.

**TÍTULO:** "Enviar pesquisas via Whatsapp"

**DESCRIÇÃO DETALHADA DO PROCESSO A SER DIGITALIZADO:** A automação do envio de pesquisas via WhatsApp representa um avanço crucial para as empresas ao garantir a precisão e a eficiência na distribuição de pesquisas aos clientes. Este processo começa com uma etapa de validação de dados, assegurando que todos os números de telefone sejam verificados e formatados corretamente, eliminando erros comuns e maximizando a taxa de entrega bem-sucedida. A capacidade de personalizar as mensagens baseadas nas informações dos clientes aumenta significativamente a relevância e o engajamento, criando uma comunicação mais efetiva e pessoal entre a empresa e o cliente.

Além disso, a funcionalidade de agendamento permite que as empresas enviem pesquisas no momento mais oportuno, aumentando as chances de visualização e resposta. A automação também inclui um mecanismo de feedback em tempo real, oferecendo aos usuários visibilidade imediata sobre o sucesso das entregas, permitindo ajustes rápidos e eficazes na estratégia de comunicação. Este processo não apenas otimiza o alcance e a eficácia das campanhas de pesquisa, mas também fortalece a relação com o cliente através de comunicações mais direcionadas e significativas.

**DESCRIÇÃO DO FLUXO PRINCIPAL:** O fluxo principal se inicia quando o usuário acessa a página de pesquisas. Em seguida, ele escolhe o tipo de pesquisa que deseja distribuir para seus clientes e por meio de qual canal, que nesse caso será feita pelo Whatsapp. Depois, ele clica na aba "Clientes" no menu e faz o download do modelo da planilha que desejar. Para ter acesso à ela, é necessário ter um programa compatível. Ao abrir a planilha, o usuário precisa preenchê-la com os dados de seus clientes de acordo com as informações pedidas. Em seguida, ele seleciona o arquivo para importação e confirma se os dados estão corretos. Feito todo esse processo, basta o usuário clicar na aba de "Comunicação", depois em "Pré-visualização" para por fim selecionar os parâmetros desejados e salvar a pesquisa. 

<img width="80%" src="./assets/fluxo-principal-RF01.png"/>
</br>

**DESCRIÇÃO DO FLUXO ALTERNATIVO:** O processo de envio de pesquisas inicia com o acesso à página de pesquisa e a escolha do questionário a ser distribuído. Caso a opção seja por não utilizar o WhatsApp, há alternativas como o envio via e-mail, SMS ou através de uma lista de links. Além disso, caso o usuário já tenha uma planilha de dados dos clientes previamente baixada e preenchida, ele pode pular a etapa de download e abertura da planilha, e partir diretamente para a importação e confirmação dos dados para o envio da pesquisa.

<img width="80%" src="./assets/fluxo-alternativo-RF01.png"/>
</br>

**DESCRIÇÃO DO FLUXO DE EXCEÇÃO:** O fluxo de exceção presente no diagrama se inicia quando o usuário tenta enviar as pesquisas aos clientes selecionados e acontece algum erro, ao ocorrer o erro na tentativa de envio irá aparecer um popup na tela do usuário avisando que ocorreu um erro, esse pop-up conta com um botão do qual ao clicar nele é realizado novamente uma tentativa de envio. Após isso, é esperado que as pesquisas sejam enviadas com sucesso aos clientes.

Além disso, ao fazer o download do modelo para preenchimento, por mais que a chance seja baixa, pode ser que o usuário não possua  nenhum programa compatível para abrir o arquivo do modelo da planilha.

<img width="80%" src="./assets/fluxo-excecao-RF01.jpeg"/>
</br>

## Requisito funcional 2

Considerando o caso de uso citado acima, o segundo requisito funcional é: "Eu, como usuário, devo ser capaz de verificar os resultados das pesquisas na plataforma, para obter insights valiosos sobre como é a visão dos meus clientes sobre a minha empresa". Aqui abaixo está uma explicação mais aprofundada do mesmo, o que facilita a compreensão do seu significado e objetivo.

**TÍTULO:** "Verificação dos resultados das pesquisas"

**DESCRIÇÃO DETALHADA DO PROCESSO A SER DIGITALIZADO:** O processo se encaixa após a etapa de enviar as pesquisas para os clientes da minha empresa, conseguindo assim uma visualização de como foram os resultados das pesquisas na totalidade, trazendo métricas como, NPS (Net Promoter Score), CSAT (Customer satisfaction) e o CES (Customer Effort Score), onde o NPS serve para **identificar quem são os cliente detratores, neutros e promotores**, o CSAT serve para **visualizar o nível de satisfação com o produto, atendimento etc.**, e o CES serve para **medir o índice de esforço do cliente de certa atividade**, cada uma dessas com uma visualização diferente e com cálculos diferentes para medir se a sua empresa está no caminho correto ou não de experiência do usuário, além de conseguir separa e priorizar quais gráficos mais se encaixa com o seu modelo de visualizar cada uma das métricas, além de conseguir ver os dados a partir de tal data ou determinado período.

Este processo está ligado com a funcionalidade da plataforma que permite aos usuários verificar os resultados das pesquisas realizadas e enviadas para os usuários de tal empresa ou marca, ou até mesmo de um serviço, fazendo assim, uma boa causa a automatização de testes para essa funcionalidade, pois, o cliente que utilizar essa plataforma necessita de alguma forma visualizar as respostas e as métricas das pesquisas que foram realizadas, para assim saber as próximas tomadas de decisão, tornando assim a automatização do processo de testes dessa funcionalidade muito importante para os dois lados, pois os clientes da Track.co não vão perder tomadas de decisão do próprio negócio, e os desenvolvedores da Track.co não vão estar colocando em risco o não comprimento dos seus termos como um SLA

**DESCRIÇÃO DO FLUXO PRINCIPAL:** No fluxo principal, o usuário inicia sua interação com a plataforma acessando a página do dashboard, que é a página responsável por conter os gráficos e informações de pesquisas feitas, nesta página do dashboard o usuário define a pesquisa que deseja ver , após isso e disponibilizado os dados da pesquisa e gráficos que facilitam a visualização desses dados, fazendo com que o usuário consiga tirar insight das informações coletadas nas suas pesquisas.

<img width="80%" src="./assets/fluxo-principal-RF02.jpeg"/>
</br>

**DESCRIÇÃO DO FLUXO ALTERNATIVO:** Foram pensados em 3 fluxos alternativos possíveis:
- Em vez de navegar manualmente até a aba de pesquisas, o usuário pode acessar as pesquisas clicando no indicador dentro do dashboard geral, que indica o índice de satisfação geral das pesquisas.

<img width="80%" src="./assets/fluxo-alternativo2-RF02.png"/>
</br>

- Por sua vez, o usuário também pode visualizar uma pesquisa a partir da área de *dashboard singular*, onde o usuário realiza uma busca, e a partir da seleção de uma pesquisa específica, é mostrado um dashboard com base em uma única pesquisa, no caso, a selecionada.

<img width="80%" src="./assets/fluxo-alternativo-RF02.png"/>
</br>

**DESCRIÇÃO DO FLUXO DE EXCEÇÃO:** Considerando que o fluxo principal possui poucas etapas, algumas exceções possíveis podem ocorrer. Por exemplo, o usuário pode não conseguir realizar a busca para acessar o dashboard de uma pesquisa específica devido a algum erro no sistema. Além disso, em situações em que o processo de coleta de dados da pesquisa estiver incompleto ou em andamento, os usuários podem não conseguir acessar resultados abrangentes até que todas as respostas tenham sido coletadas e processadas. Adicionalmente, problemas técnicos temporários podem surgir, impedindo que os usuários acessem os resultados da pesquisa e exigindo que aguardem até que o problema seja resolvido para obter acesso ao dashboard.

<img width="80%" src="./assets/fluxo-excecao-RF02.png"/>
</br>

# Diagrama C4 model

As descrições abaixo tem o objetivo de explicar o diagrama C4 model, destacando seus atores, componentes e a relação entre eles, além de algumas visões tidas durante o desenvolvimento sobre o porquê o diagrama foi criado dessa maneira. 

## Diagrama nível 1 (contexto)

<img width="80%" src="./assets/diagrama-nivel1.jpeg"/>
</br>

O diagrama também pode ser acessado com maior qualidade e editado [aqui](https://app.diagrams.net/#G1N-Ku-9drP4Nbifxg4gL0rwvw7ALSza3S#%7B%22pageId%22%3A%22SXrKQ5fTKh8LalVRz_O8%22%7D)

### 1.1 Atores que interagem com o sistema

Os atores neste nível são as entidades externas que interagem com o sistema. Nesse caso os usuários e software externos, onde no momento do nosso diagrama de nível 1 temos os seguintes atores:
- **Funcionário:** que seria o funcionário da empresa X que utiliza o software da Track.co;
- **WhatsApp Business system:** serviço do WhatsApp focado no uso de negócios para os seus usuários;
- **E-mail system:** sistema responsável pelo envio, recebimento de email, nesse caso não sabemos qual e o provedor específico;
- **SMS system:** sistema responsável pelo envio de SMS para os usuários selecionados, nesse caso não sabemos qual e o provedor específico;
- **Cliente Externo:** que seria o cliente da empresa X, ou seja seria o usuário que as empresas querem ouvir sobre a sua experiência com o produto e/ou serviço;

Esses são os atores que interagem diretamente e indiretamente com o sistema da Track, onde cada um deles tem um papel para estarem no diagrama. Como por exemplo o serviço de Email que ajuda o sistema da Track a distribuir as pesquisas para os usuários da empresa X, o cliente, responde a pesquisa por meio do software da Track que cria um ambiente para aqueles usuários responderem, bem parecido um front-end para aquela ocasião.

### 1.2 Principais componentes do sistema (alto nível)

**Software CMX Track.co**

Invés de separar alguns componentes dentro do Software CMX Track.co, pensamos em deixar algo simples pois não possuímos muitas informações precisamente sobre como esse sistema é construido internamente, porem sabemos que ele possui um front, back, banco de dados, filas, sistema de webhook, porem decidimos colocar ele totalmente como apenas um componente podendo ser mais detalhado no nível 2.

**Componentes de comunicação ( WPP , Email, SMS )**

Todos eles com o propósito de enviar as pesquisas para os usuários da empresa que são clientes, possibilitando assim aos usuários darem as suas opiniões sobre a sua experiência para a empresa em si, além de possibilitar maiores formatos de comunicação e com as repostas dos usuários a empresa ganha ainda mais poder de tomada de decisões a si fazer. Abaixo um detalhamento de cada um de uma forma resumida:
- **WPP:** WhatsApp Business tem a capacidade de enviar link ou até mesmo ter a criação de bots para responder ou salvar certas repostas dos usuários, sendo uma grande ferramenta para as empresas e para os negócios que precisam se comunicar com os seus clientes;
- **E-mail:** Mesmo não sabendo o provedor de forma direta, sabemos que esse serviço tem o foco em envio de email utilizando o protocolo SMTP, para assim conseguir enviar vários email para diferentes domínios e pessoas, além de ter uma forma de receber email porem com propósitos diferentes dos de enviar;
- **SMS:** Mesmo não sabendo o provedor de forma direta, suponhamos que a Track tem um fornecedor que utiliza o SMPP para envio de SMS para vários smartphones, sem se preocupar com limitações de enviar para apenas um tipo de operadora;

Lembrando que todos esses serviços de comunicação tem o foco de enviar o link para redirecionar o usuário para pagina de pesquisas que o Funcionário criou.

### 1.3 Relacionamento entre os atores e componentes

Esse tópico serve apenas para reforçar como funciona o relacionamento entre os atores e os componentes do diagrama.

- **Funcionário → Software CMX Track.co**
  
Começando pelo relacionamento entre o Funcionário e o Software CMX Track.co, podemos observar que o Funcionário utiliza diretamente o software ou seja, ele que interage com as principais funcionalidades do Software CMX Track.cocomo a criação e o envio de pesquisas para os usuários ( Cliente Externo ) , visualização do dashboard com o resultado das pesquisas, separação de cargo e etc.

Logo o Funcionário em si interage diretamente com o Software CMX Track.co, utilizando todas ou quase todas as funcionalidades do Software CMX Track.co.

- **Software CMX Track.co → Componentes de comunicação ( WPP , Email, SMS )**
  
Entre Software CMX Track.co e os Componentes de comunicação ( WPP , Email, SMS ) temos uma relação onde o sistema da Track utiliza vários formatos de comunicação para os usuários, listando os principais temos o WPP ( WhatsApp ), E-mail e SMS conseguir ter uma distribuição ainda maior das suas pesquisas.

Possuindo assim serviços para facilitar essa distribuição de pesquisas em diferentes protocolos e lugares, começando pelo WPP vemos que a Track utiliza o WhatsApp Business e os seus serviços para encaminhar as pesquisas via chat para os usuários, o Email sendo utilizado o protocolo [SMTP](https://aws.amazon.com/pt/what-is/smtp/#:~:text=SMTP%20significa%20Simple%20Mail%20Transfer,retransmitir%20mensagens%20de%20e%2Dmail.) para realizar o envio e recebimento se for o caso via Email e por ultimo temos o SMS sendo utilizado o protocolo [SMPP](https://smpp.org/) para envio de mensagem via aplicação e smartphone.

Logo o sistema da Track tem relações diretas com os sistemas de comunicação, assim aumentado e facilitando a distribuição das suas pesquisas.

- **Componentes de comunicação ( WPP , Email, SMS ) → Cliente Externo**

Entre os Componentes de comunicação e o Cliente externo vemos que o usuário pode receber de várias maneiras esse link, ajudando de uma certa forma a experiência dele ser ouvida pela empresa, logo o sistema da Track ou o Funcionário tem acesso as informações de contato de cada usuário ou suas preferẽncias de contado.

Nesse caso observamos que o Cliente externo recebe um link que redireciona ele para uma área de responder o formulário de pesquisa, esse ambiente ainda um pouco desconhecido por falta de não termos essa reposta direta da Track, mas acreditamos que seja um ambiente que a Track deve gerar por pesquisa ou “safra de pesquisas“.

- **Cliente Externo → Software CMX Track.co**

Como esclarecidos alguns pontos acima, essa relação fecha o loop do sistema, onde as respostas dos Clientes externos das pesquisas que foram enviadas para eles são enviadas para o próprio software da Track, assim o Funcionário consegue ter a visualização do Dashboard com esses resultados e com as métricas de boas práticas de CX.

Portando, o único relacionamento que podemos observar entre esses dois são que um recebe e envia um pro outro porem o usuário nem sempre recebe da mesma maneira o link, mas o Software da Track na maioria das vezes recebe essas respostas da mesma maneira (HTTP).

## Diagrama nível 2 (container)

<img width="80%" src="./assets/diagrama-nivel2.jpeg"/>
</br>

O diagrama também pode ser acessado com maior qualidade e editado [aqui](https://app.diagrams.net/#G1N-Ku-9drP4Nbifxg4gL0rwvw7ALSza3S#%7B%22pageId%22%3A%22SXrKQ5fTKh8LalVRz_O8%22%7D)

### 1.1 Atores que interagem com o sistema

Os atores neste nível são as entidades externas que interagem com o sistema. Nesse caso, eles são os mesmos que o do diagrama do nível 1, e podem ser encontrados na sessão "[1.1 Atores que interagem com o sistema](#11-atores-que-interagem-com-o-sistema)".

### 1.2 Pricipais componentes do sistema

Destrinchando o bloco nomeado de *Software CXM Track.co*, previamente definido como componente principal do sistema, agora o mesmo se encontra dentro de um contêiner subdividido em quatro blocos, sendo eles, *Front-End, API da aplicação, Serviço de testes automatizados e Database*.
- **Front-end:** é o bloco onde consiste os componentes de interface da aplicação, nele podemos visualizar todo o gerenciamento de pesquisas e informações, tanto a partir de pesquisas, quanto a partir de dashboards. No Front-end também, é local onde são enviadas pesquisas para usuários selecionados;
- **API da aplicação:** é onde se encontram todo o banco de funcionalidades, que podem ser integradas virtualmente em qualquer sistema, gerenciando também os protocolos de envio de mensagens via diferentes aplicativos, sendo também o agente do recebimento da devolução das pesquisas enviadas, alocando as respostas no banco de dados posteriormente;
- **Database:** A base de dados é alocada por um servidor em cloud, que gerencia o fluxo de dados, garantindo a estabilidade e integridade do servidor. A base de dados recebe e envia informações diretamente para API da aplicação;
- **Serviço de testes automatizados:** Sistema implementado dentro do bloco geral da aplicação, que por sua vez realiza testes constantes no Front-end, e na API da aplicação, a partir das ferramentas Cypress e K6, e tem um monitoramento definido pelas ferramentas GitHub actions e Docker.

### 1.3 Relacionamento entre os atores e componentes

Esse tópico serve apenas para reforçar como funciona o relacionamento entre os atores e os componentes do diagrama.

- **Funcionário → Front-end**

Começando pelo relacionamento entre o funcionário e o front-end do software CMX Track.co, podemos observar que é com esse componente que ele ira fazer suas ações dentro do sistema sendo elas criação e o envio de pesquisas para os usuários ( Cliente Externo ), visualização do dashboard com o resultado das pesquisas, separação de cargo e etc.

Logo o funcionário interage diretamente com o front-end, do qual disponibiliza as funções necessárias para eles.

- **Front-end → API Application**

Neste relacionamento temos a tela principal da qual apresenta uma ui/ux da qual ajuda o usuário a fazer uso da api, para diversas funções como enviar pesquisas, visualizar dados de pesquisas, fazer o upload de dados de clientes e etc.

Nessa etapa o relacionamento se dá diretamente entre front-end e back-end, que seria a API Application, do qual faz com que as ações tomadas dentro do site sejam executadas.

- **API Application → Database**

A relação entre API Application e Database, funciona da seguinte forma, a API Application envia informações para o Database como também puxa informações dele, para que a API Application consiga fazer uso dessas informações de modo que consiga compartilhar com os outros componentes que ela interage.

- **Automated Test Service → Front-end**

A relação entre esses dois componentes é o componente Automated Test Service, garantir o funcionamento do Front-end, por meio de testes automatizados, assegurando o funcionamento de todos pontos importantes, que possam atrapalhar o funcionamento do software para o usuário.

Nesta relação o Automated Test Service é responsável por realizar um teste sempre que uma nova atualização ou versão do software for lançada verificando o funcionamento do Front-end por completo de forma rápida, agilizada e fácil. 

- **Automated Test Service → API-Application**

O Automated Test Service se relaciona com a API-Application, fazendo testes que garantam o funcionamento de todas as rotas da API, de forma fácil, rápida e facilitada, para que os desenvolvedores tenham maior agilidade ao testar as rotas da API-Application.

Nesta relação o Automated Test Service é responsável por realizar um teste sempre que uma nova atualização ou versão do software for lançada verificando o funcionamento do API-Application por completo.

- **API-Application → Componentes de comunicação ( WPP , Email, SMS )**

A API-Application é responsável por fazer o envio de pesquisas para os clientes nos sistema de comunicação, fazendo com que o envio das pesquisas seja feito de forma facilitada, com isso não é necessário uma pessoa enviando a mensagem para cada cliente por vez.

- **External Costumer → API-Application**

Essa relação é feita a partir de um webhook para avisar sobre as atividades dos External Costumer avisando as ações deles tomadas durante as pesquisas.

Nesta relação observamos o External Customer responsável por responder as pesquisas e a API-Aplication por receber os dados do que foi respondido, se foi respondido ou não e etc.

# Implementação do frontend e práticas de segurança

Como foi evidenciado na sessão protótipo, o design do Frontend foi pensado para facilitar a realização dos testes necessários, e por isso algumas funcionalidades presentes no menu não funcionam, como "Dashboard", "Interações" e "Configurações". O fluxo de navegação segue o protótipo, e o código pode ser acessado em: …..x

Além disso, foi adicionada uma sessão de Login, que também foi atualizada no protótipo, Essa, está integrada a um framework chamado Auth0, que realiza a autenticação dos usuários. 

Ao acessar a página de Login no protótipo será possível perceber que ela está um pouco diferente comparado com a do código, e isso ocorre pois a biblioteca do Auth0 já cria campos de input de e-mail e senha automaticamente em uma tela própria. Por isso, a tela de Login desenvolvida tem apenas um botão que direciona o usuário para a página criada pelo Auth0. Apesar disso, foi pensado em realizar em um futuro uma integração desses campos de input com o nosso frontend, para que a página fique mais fiel ao protótipo e a experiência do usuário melhore.

## Auth0

Aqui estão instruções detalhadas sobre como implementar a autenticação com Auth0 em uma aplicação React usando TypeScript. O Auth0 é uma plataforma de autenticação e autorização que simplifica a inclusão de autenticação segura em suas aplicações.

### 1. Instalação do Pacote `@auth0/auth0-react`

Comece garantindo que você tenha o Node.js e o npm instalados no seu sistema. Em seguida:

Instale o pacote `@auth0/auth0-react` para facilitar a integração com o Auth0:

npm install @auth0/auth0-react

### 2. Configuração do Auth0

- **Criação de uma Conta no Auth0**

Acesse o [Auth0 Dashboard](https://auth0.com/) e crie uma conta.

- **Criação de uma Aplicação no Auth0**

No painel do Auth0, vá para "Applications" e crie uma nova aplicação. 

- **Pegar credencias para rodar o código**

Anote o "Domain" e o "Client ID" da aplicação, essas serão as variáveis usadas no .env, (VITE_AUTH0_DOMAIN=”domain” e VITE_AUTH0_CLIENT_ID=”Client Id”)

- **Configurações de Autorização e Redirecionamento**

No painel da sua aplicação no Auth0, vá para a seção "Settings" e então busque por “Application URIs”. Adicione o URL de redirecionamento nos campos “”Allowed CallBack URLs”, “Allowed Logout URLs” e “Allowed Web Origins”, geralmente é `http://localhost:3000` para desenvolvimento.

### 3. Implementação do Auth0Provider no React

Para implementar o Auth0Provider no React, adicionamos um componente do Auth0 no arquivo main.tsx, nos envolvemos o <RouterProvider/> com o elemento <Auth0Provider> da biblioteca do Auth0, fazendo com que sempre que um usuário que não esteja logado seja encaminhado para pagina de login.

Na página de login usamos das funções do Auth0, para informar caso esteja carregando, caso ocorra algum erro e para mostrar quando estiver carregando, se durante a abertura da página não ocorrer nada para que o código pare em uma dessas condições, a página de login aparece estilizada com um botão de login do qual é responsável por ativar a função “loginWithRedirect()” que encaminha o usuário para a página com o componente de login fornecido pelo Auth0.

# Instruções de execução do projeto

Requisitos:
- Ter o docker instalado na maquina local.
- Node.js instalado na maquina local.
- Editor de texto ou IDE para editar arquivos de código.

Caso você não tenha o docker instalado, acesse: https://docs.docker.com/engine/install/ e siga as instruções presentes na documentação oficial para instalação selecionando o seu sistema operacional.

**Passos para Execução:**
Clonar o Repositório:
Clone o repositório do projeto para sua máquina local:
```bash
# Clone o repositório
git clone https://github.com/Inteli-College/2024-T0003-ES09-G03.git
```
**Configurar o Docker:**
Certifique-se de que o Docker esteja em execução na sua máquina.
Navegue até o diretório \codigo
```bash
cd codigo
```
execute o seguinte comando para iniciar o Docker:
```bash
docker-compose up -d
```

## Rodando o backend
Navegue até o diretório do backend do projeto:
```bash
cd \codigo\backend 
```
Configurar Variáveis de Ambiente:
Crie o arquivo .env na pasta "backend" do projeto

O arquivo .env é um documento de configuração que armazena variáveis de ambiente para uma aplicação, como chaves secretas e configurações específicas do ambiente. 

O seu arquivo .env terá informações de configuração do banco de dados, como pode ser visto no exemplo abaixo:
```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:6500/db-grupo-3?schema=public"
```

Execute o backend com o comando:
```bash
npm run dev
```

## Rodando o frontend
Navegue até o diretório do frontend do projeto:
```bash
cd codigo/frontend
```

Crie o arquivo .env na pasta "frontend" do projeto com as informações de configuração do Auth0, conforme mostrado abaixo:
```bash
VITE_AUTH0_DOMAIN="~informação fornecida pelo auth0~.us.auth0.com"
VITE_AUTH0_CLIENT_ID="~informação fornecida pelo auth0~"
```
Execute o frontend com o comando:
```bash
npm run dev
```

# Documentação da API com Swagger

A documentação dos endpoints foi feita pelo Swagger, e por isso precisa que o backend da aplicação esteja rodando para ser acessada. Para isso, siga os passos descritos na sessão [Instruções de execução do projeto](#instruções-de-execução-do-projeto). Após seguir todos os passos, entre na pasta backend do projeto de rode comando a seguir:

```
npm run start
```

Caso todo esse processo seja feito mas não seja possível acessar a documentação, ela pode ser vista de forma menos detalhada na foto abaixo:

<img src= "./assets/swagger.jpg">

Ao acessar a documentação da API pela web, através do endpoint "/api-docs", é possível observar a mensagem indicando a ausência de operações definidas no spec. Esse comportamento não reflete a realidade das configurações da nossa API, mas sim um conflito decorrente da tecnologia empregada no backend. Garantimos que todas as rotas e operações estão devidamente implementadas e configuradas no código-fonte. Estamos trabalhando para resolver essa discrepância e melhorar a experiência de documentação da nossa API.

Além disso, vale ressaltar que o endpoint "/clent/report/:id/customer/:id está temporariamente "mockado", ou seja, ele está usando dados simulados ou fictícios em vez de interagir com dados reais do sistema ou do banco de dados.

 
# Testes unitários - FrontEnd 

Instrução para execução dos testes: Criamos uma pasta dedicada para armazenar os códigos de teste unitário, que testam componentes do front-end que são utilizados dentro da aplicação web.

Diretório do pasta de testes:
~~~
cd codigo/frontend/src/test
~~~

Após acessar o diretório, basta selecionar qual componente deseja testar (considere que o nome do arquivo de testes tem o mesmo nome do componente), e novamente atualizar o diretório para acessar o arquivo de teste com o componente que deseja que seja testado. 

Exemplo: 
~~~
2024-T0003-ES09-G03\codigo\frontend\src\test\navbar-render-test
~~~

Por fim, basta apenas executar o comando de inicialização no terminal

~~~
npm run test
~~~

Garanta que está com todas as dependências do projeto devidamente instaladas para execução sem erro dos testes (execute o comando npm i). 

# Testes de Integração

Para o projeto, foram escolhidas 5 integrações (consideradas mais importantes) para realizar os testes de integração, sendo elas das rotas:
- envio das respostas de uma pesquisa
- get de todos os usuários de uma empresa
- update de um usuário
- distribuição de pesquisas
- realizar o upload de um arquivo

Tais integrações foram realizadas utilizando o supertest. Este, é uma biblioteca de teste de API para Node.js, que facilita a realização de testes de integração HTTP em aplicativos Node.js. No caso do nosso projeto, foi decidido por integrar a biblioteca ao Jest. O motivo dela ter sido escolhida pode ser visto com mais detalhes (aqui). 

Além disso, foram criadas alguns outros testes que testam a integração do Service com o banco dados. Todo esse conjunto gera uma bateria de 13 testes, que contém ao todo 39. Abaixo, é possível visualizar que todos os testes da bateria passaram com sucesso. Para visualizar o código dos mesmos, acesse "Tecnologias utilizadas" dentro da sessão [Testes de Integração](#testes-de-integração)

<img width="80%" src="./assets/testes.png"/>
</br>

Para visualizar o código dos mesmos, acesse o caminho: 

```
cd codigo/frontend/src/test
```
E execute o comando:
```
npm test
```
# Instruções para a Execução de Testes de Caixa Preta

## Testes de caixa preta:
O teste de caixa preta é uma metodologia de verificação em que o examinador avalia a funcionalidade de um aplicativo sem saber muito sobre os detalhes internos de seu código. Essa abordagem se concentra em examinar a saída gerada a partir de entradas específicas, sem considerar o processo interno ou a estrutura do software. Esses testes são cruciais para identificar discrepâncias entre o comportamento esperado e o real do sistema, assegurando que todos os requisitos do usuário sejam atendidos adequadamente.

Nossos testes de caixa preta foram feitos utilizando o Cypress, que é uma ferramenta avançada e de fácil uso para testes automatizados de front-end.

Para executar os testes basta seguuir o passo a passo descrito embaixo:

## Passos para a execução dos testes:

1. **Preparação do ambiente**

Para garantir que o Cypress esteja instalado no projete rode o comando:

``` 
npm install cypress --save-dev
```

Assim asseguramos que todas as dependencias necessarias estejam disponíveis para os testes.

3. **Acesso aos testes**

Navegue até o diretótio aonde os testes estão localizados:

  ```
  cd codigo/frontend/
  ```

4. **Execução dos Testes**

Dentro do diretório, você tem duas opções principais para executar os testes com o Cypress:

- Para abrir a interface gráfica do Cypress, onde é possível visualizar a execução dos testes em tempo real rode o comando:
```
npx cypress open
```

- Para executar os testes diretamente no terminal rode:
```
npx cypress run
```

# Sonarqube

## Instalação

Com o docker devidamente alocado dentro do projeto, o primeiro passo é iniciar o servidor do sonarqube pelo seguinte comando:
~~~
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
~~~

Seguindo, abra o localhost:9000 e entre no sonarqube usando o login e a senha "adimin", e já redefina sua senha.

Agora, dentro do Sonarqube, realize as seguintes etapas:

1. Selecione a opção "Create local"
2. Selecione a pasta do projeto
3. Use global setting
4. Locally
5. Gere um token (escolha "no expiration") e copie seu token
6. Continue
7. Other 
8. Windows

Após a realização dessas etapas, baixe o Sonar scaner, utilize o link a seguir:
~~~
https://docs.sonarsource.com/sonarqube/10.4/analyzing-source-code/scanners/sonarscanner/
~~~

Agora, é necesário configurar as váriaveis de ambiente para execução do sonarqube, configure o arquvo .bin dentro path:

Garanta que o seguinte diretório esteja dentro da lista de paths:
~~~
sonar-scanner-5.0.1.3006-windows\bin
~~~

Após adicinado, basta salvar.

Por fim, dentro do diretório do projeto, execute o seguinte comando no terminal (Vale citar que caso as métricas sejam alteradas, o comando precisa ser executado novamente):

~~~
sonar-scanner.bat -D"sonar.projectKey=trakinos-m09-t003" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.token=sqp_89c21d464d2a893104578267d269acf13c3be32e"
~~~

Após a execução, todas as métricas estarão exibidas dentro da interface do sonarqube.

## Regra Customizada Sonarqube

### Identificação da Regra

Nome da Regra: Regra Customizada para Análise do Código do Projeto

ID da Regra: typescript:Regra_customizada_para_analise_do_codigo_do_projeto

Categoria: Vulnerabilidade

Severidade: Maior

Atributo do Código Limpo: Consistência | Convencional

Qualidades de Software Impactadas: Manutenibilidade, Confiabilidade, Segurança

<img src="./assets/regra-customizada.png"> </img>

### Descrição da Regra

Esta regra foi criada para garantir que o código atenda aos padrões de qualidade estabelecidos pela equipe, especificamente com relação à segurança, manutenibilidade e confiabilidade. Ela visa impor as condições do "Sonar way", alinhadas aos "Quality Gates" padrão do SonarQube.

### Condições da Regra

Detecção de Problemas: O código não deve ter nenhum problema detectado durante a análise.

Revisão de Problemas de Segurança: Todos os novos problemas de segurança devem ser revisados e tratados de acordo com as práticas de segurança da equipe.

Cobertura de Testes: O código deve ter uma cobertura de teste suficiente, assegurando que a maioria dos caminhos e casos de uso estão sendo testados.

Limite de Cobertura de Testes: A cobertura de testes deve ser maior ou igual a 90%.

### Parâmetros Configuráveis
regularExpression: Expressão regular (sintaxe JavaScript) usada para identificar padrões de código específicos que devem ser verificados pela regra.

flags: Modificadores da expressão regular que ajustam o comportamento da pesquisa de padrões.

message: Mensagem associada à issue quando a regra é violada. Esta mensagem deve orientar o desenvolvedor sobre a natureza do problema e como ele pode ser resolvido.

Valor Padrão para a Mensagem: "Custom-criação de regra para o projeto".

### Implementação
Esta regra customizada deve ser implementada através do script de configuração do SonarQube, utilizando os parâmetros configuráveis para definir a expressão regular específica, os modificadores e a mensagem de issue. É importante que a equipe de desenvolvimento esteja alinhada quanto aos padrões de código que estão sendo impostos por essa regra.

### Aplicação e Uso
A regra deve ser aplicada durante a análise estática de código no SonarQube. Qualquer violação detectada deve ser revisada pela equipe de desenvolvimento e tratada antes da aprovação do código para produção.

Para uma integração efetiva, recomenda-se que a regra seja parte do pipeline de integração contínua (CI), assegurando que as verificações sejam feitas de forma automatizada a cada novo commit no repositório de código.

### Manutenção e Atualizações
Esta documentação deve ser atualizada sempre que houver mudanças nos parâmetros da regra ou nos padrões de código estabelecidos pela equipe. A regra também deve ser revisada periodicamente para garantir que ela continua alinhada com as melhores práticas e os requisitos de segurança atuais.

### Identificação da Regra II

<img src="./assets/duplicated-lines.png"> </img>

### Descrição da Regra
Esta regra foi criada para garantir que o código atenda aos padrões de qualidade estabelecidos pela equipe, especificamente com relação a duplicação de código, ou seja, garantir que não hajam linhas duplicadas, melhorando significativamente a formatação do mesmo.

### Métricas da Regra

- Linhas duplicadas não podem ultrapassar 10% do código
- Cobertura menor que 80%

### Sonarqube executando

Sonarqube em execução mostrando issues por conta do commit da main

<img src="./assets/exec-sq.png"> </img>

## Relatório de Análise Estática de Código

### Resumo da Análise
A análise do SonarQube foi realizada após um merge recente com a branch principal. O status de falha no Quality Gate é devido à adição de novos códigos que ainda não foram completamente revisados ou cobertos por testes.

#### Status do Quality Gate: Falhou

- **Cobertura em Novo Código:** 0.0% (Abaixo do requisito de 80%)
- **Novas Questões:** 15 (Maior do que a condição de qualidade que é 0)

### Medidas Chave

#### Cobertura de Código
- **Total:** 0.0% em 861 novas linhas a serem cobertas

#### Duplicações
- **Percentual de Duplicação:** 9.4% em 4.9k novas linhas

#### Hotspots de Segurança
- **Hotspots Detectados:** 5 (Classificação E)

### Detalhamento por Categoria

#### Segurança
- **Questões Abertas:** 0 (Classificação A)

#### Confiabilidade
- **Questões Abertas:** 48
  - **Alto:** 0
  - **Médio:** 37
  - **Baixo:** 11

#### Manutenibilidade
- **Questões Abertas:** 80
  - **Alto:** 21
  - **Médio:** 20
  - **Baixo:** 39

### Análise Contextualizada e Recomendações

Entendemos que as falhas identificadas são em parte devido à integração do novo código com a branch `main`. Espera-se que estas questões sejam abordadas ao longo da atual Sprint:

1. **Cobertura de Testes:** A equipe de desenvolvimento deve focar na escrita e na melhoria dos testes para o novo código ao longo da Sprint, com o objetivo de atingir a meta de 80% de cobertura.
2. **Resolução de Problemas:** As 15 novas questões identificadas serão revisadas e corrigidas pela equipe conforme planejado durante a Sprint.
3. **Duplicações de Código:** A duplicação de 9.4% nas novas linhas será abordada com refatoração e revisão do código para melhorar a manutenibilidade.
4. **Hotspots de Segurança:** Embora não existam questões abertas de segurança, os 5 hotspots de segurança serão analisados e mitigados conforme necessário.
5. **Melhoria Contínua:** A equipe continuará a monitorar e melhorar a confiabilidade e manutenibilidade do código, tratando das questões abertas de acordo com a prioridade e o impacto.

## Conclusão

A falha no Quality Gate é reconhecida como uma parte natural do processo de desenvolvimento, especialmente após merges significativos. A equipe está comprometida com a correção dos problemas identificados e com a melhoria contínua da qualidade do código dentro do ciclo atual da Sprint.

# Instruções de Instalação e Execução dos Testes de Carga com k6

Este guia fornecerá instruções passo a passo para instalar o k6 e executar testes de carga. O k6 é uma ferramenta de teste de carga de código aberto que permite simular o tráfego de usuários em um sistema para avaliar seu desempenho e escalabilidade.

Antes de iniciar a execução dos testes, é necessário que o usuário esteja com o backend rodando. Caso você não tenha o sistema inicializado siga para o tópico de [Instruções de execução do projeto](#instruções-de-execução-do-projeto)

## Instalação do k6

O k6 possui pacotes para Linux, Mac e Windows. Alternativamente, você pode usar um contêiner Docker ou um binário independente.

### Linux

#### Debian/Ubuntu

```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

#### Fedora/CentOS

Usando dnf (ou yum em versões mais antigas):

```bash
sudo dnf install https://dl.k6.io/rpm/repo.rpm
sudo dnf install k6
```

### MacOS

Usando o Homebrew:

```bash
brew install k6
```

### Windows

Se você usar o gerenciador de pacotes Chocolatey, pode instalar o pacote não oficial do k6 com:

```bash
choco install k6
```

Se você usar o Windows Package Manager, instale os pacotes oficiais dos manifestos do k6 (criados pela comunidade):

```bash
winget install k6 --source winget
```

Alternativamente, você pode baixar e executar o instalador oficial mais recente.

### Docker

```bash
docker pull grafana/k6
```

Também temos uma imagem separada que você pode usar com o Chromium instalado para executar testes de navegador k6.

```bash
docker pull grafana/k6:master-with-browser
```

## Executando Testes de Carga

1. **Crie Seus Scripts de Teste:**
   - Antes de executar os testes de carga, você precisará criar scripts de teste usando a sintaxe do k6. Você pode aprender mais sobre como escrever scripts de teste no [guia de uso do k6](https://k6.io/docs/getting-started/running-tests).

2. **Execução dos Testes de Carga:**
   - Certifique-se de que o backend está rodando.
   - Acesse o diretório até a pasta `load` da nossa arquitetura.
   ~~~
   \codigo\backend\src\scripts\load\
   ~~~
   - Dentro da pasta `load` é possível localizar outras pastas com scripts de teste do k6. Essas, se referem aos endpoints testados.
   - Escolha uma dessas pastas para a execução do teste.
   - Acesse a pasta do endpoint escolhido e rode o comando  a seguir:
   ~~~
   k6 run <nome_do_script>.js
   ~~~
   
3. **Exemplo prático:**
   - Como exemplo, foi escolhido o endpoint answerdReport.
   - Seguindo a lógica a acima, para executar o teste, foi rodado o o seguinte comando no terminal da pasta:
   ~~~
   k6 run case_1.js
   ~~~
   - A seguir temos o resultado da execução desse teste:

#### 10 Usuários em 5 Minutos:


 <img src="./assets/teste_de_k6_case1_10users.png"> </img>

##

 <img src="./assets/k6-aR-case1.jpeg"> </img>

## Documentação e resultados dos testes realizados
   - Para uma melhor compreensão das métricas mostradas acima, há um artigo que as explica e pode ser acessado em:
   [Artigo sobre métricas do K6 para testes de desempenho eficientes](https://djesusnet.medium.com/dominando-as-m%C3%A9tricas-do-k6-para-testes-de-desempenho-eficientes-bbed21ec0cd0#:~:text=O%20que%20s%C3%A3o%20M%C3%A9tricas%20no,transfer%C3%AAncia%2C%20erros%2C%20entre%20outros.).

   - Para verificar os resultados dos testes de carga realizados no endpoints do projeto acesse: [Teste de carga](./testes-de-carga).

# Dashboard com Grafana

## Video explicativo da solução

Esse video tem como proposito mostrar a arquitetura e como estamos utilizando ferramentas de APM para ter metricas do nosso sistema.

[Link do video](https://drive.google.com/file/d/1lllfHpZw8BCxrKKwYC31hVg4RVK2AA9o/view?usp=sharing)

## Instrução de instalação e execução do dashboard

### Introdução

Foi desenvolvido um dashborad utilizando as tecnologias Prometheus e Grafana, para que o parceiro pudesse visualizar algumas métricas valiosas do funcionamento da sua aplicação.

#### Prometheus
O Prometheus coleta e armazena suas métricas como dados de séries temporais, ou seja, as informações das métricas são armazenadas com o carimbo de data e hora em que foram registradas, juntamente com pares de valores-chave opcionais chamados rótulos.

#### Grafana
O Grafana é uma plataforma que permite a visualização e a análise de métricas por meio de gráficos. Por meio da criação de dashboards dinâmicos que são personalizados para atender as necessidades de cada usuário.

#### Arquitetura

A arquitetura de como os componentes do dashboard se comunicam pode ser vista abaixo:

![](./assets/arquitetura-grafana-prometheus.png)

### Métricas escolhidas

As métricas escolhidas foram pensadas em análise de negócios e análises de tecnologia fornecendo compreensão abrangente tanto da perspectiva de negócios quanto tecnológica. Além disso, foram pensadas em métricas que tivessem valor para o cliente e que ele pudesse tirar insights sobre o seu produto.

**Métrica 1 de negócios:**

Quantas pesquisas são respondidas por dia: Essa métrica ajuda a entender o nível de engajamento dos usuários ou clientes com a plataforma. Um alto número de pesquisas respondidas indica um bom engajamento e uma demanda consistente, enquanto uma baixa taxa de resposta sinaliza a necessidade de melhorias na visibilidade da pesquisa ou no interesse do público-alvo.

**Métrica 2 de negócios:**

Quantidade de pesquisas enviadas por dia: Ao medir a quantidade de pesquisas enviadas, você tem uma visão clara da carga de trabalho operacional e pode aferir se as estratégias de distribuição de pesquisa estão funcionando como esperado. Além disso, essa métrica pode revelar tendências de curto e longo prazo na demanda por informações, permitindo ajustes na capacidade de resposta ou na alocação de recursos.

**Métrica 1 de tecnologia:**

Tempo que a requisição de upload de planilhas demora: Esta métrica é crucial para avaliar a performance técnica do sistema. O tempo de processamento pode afetar diretamente a experiência do usuário e a eficiência operacional. Identificar gargalos ou inconsistências no tempo de upload pode levar a otimizações que beneficiam o usuário final e melhoram a percepção geral da plataforma.

**Métrica 2 de tecnologia:**

Requisições que deram erro no endpoint de distribuição: Monitorar erros em endpoints é vital para a manutenção da saúde do sistema. Isso não apenas ajuda a identificar problemas técnicos que precisam ser corrigidos para evitar interrupções no serviço, mas também pode oferecer insights sobre possíveis melhorias na infraestrutura de TI ou na qualidade do código.


### Instalação e execução

**Pré-requisitos:**

- Ter docker instalado

#### Passo 1: configurar o repositório e iniciar o ambiente

Clone o repositório do projeto no terminal da sua máquina utilizando o comando:

``` bash
git clone https://github.com/Inteli-College/2024-T0003-ES09-G03.git
```

Após isso, entre no diretório backend do projeto e logo em seguida crie um arquivo <strong>.env</strong> com os seguintes dados:
```bash
cd codigo/backend
```

```js
DATABASE_URL="postgresql://postgres:postgres@database:5432/postgres"
```

Após isso execute o seguinte comando para inicializar a aplicação com as ferramentas de APM, sendo necessário esperar todos os container inicializarem:

```bash
 docker compose up
```

para verificar se deu tudo certo você pode acessar http://localhost:3001/metrics e deve retornar para você essa seguinte resposta no navegador:

![](./assets/metircs-nav.png)

#### Passo 2: configurar os gráficos

Para configurar os gráficos, é precise acessar o grafana e realizar login nele, para assim ter acesso as suas funcionalidades.

Para acessar o granfana precisa apenas no seu navegador acessar http://localhost:3000 

![](./assets/grafana-login.png)

<strong>username</strong>: admin
<strong>password</strong>: admin

após isso ele vai pedir para ser criado uma nova senha, em seguida ele vai te emcaminhar para essa página:

![](./assets/grafana-part-1.png)

Em seguida você deve encaminhar para o **Data sources** para realizar a conexão com o Prometheus.

![](./assets/grafana-part-2.jpeg)

Após isso você vai ser encaminhado para uma página com apenas um botão disponivel **Add data source**, clicando nele você deve selecionar o Prhometheus.

![](./assets/grafana-part-3.png)
![](./assets/grafana-part-4.jpeg)

Após selecionar o Prometheus, você precisa colocar <code>http://prometheus:9090 </code> no campo **Connection**, como a imagem abaixo:

![](./assets/grafana-part-5.jpeg)

Em seguida indo para o final da página, tem um botão para realizar o salvamento e testar a conexão com o Prometheus **Save & test**, precionando ele deve aparecer a seguinte menssagem de sucesso:

![](./assets/grafana-part-6.png)

Após isso você pode estar clicando no link da mensagem  **building a dashboard**, onde você será direcionado para á próxima página.

Nessa página você deve selecionar a opçãode **Import dashboard**, para facilitar a utilização e configuração dos gráficos. 

![](./assets/grafana-part-7.jpeg)

Nessa página, você pode estár clicando no campo **Upload dashboard JSON file**, onde você pode estar colocando o Json localizado no nosso backend, onde você pode estar realizando o  [Download](../codigo/backend/grafana/Dashboard%20grupo3%20-%20trackinos-1711968031714.json)

![](./assets/grafana-part-8.jpeg)

Após isso você pode estar apertando o botão **Import**, após isso você pode está tendo uma visualização do nosso dashboard com algumas metricas do nosso software.

![](./assets/grafana-part-9.jpeg)

![](./assets/grafana-part-10.png)

Com isso você tem o mesmo setup do nosso projeto, fique a vontade para explorar e modificar os gráficos 😊.

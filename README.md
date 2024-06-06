# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="./docs/assets/inteliLogo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Modelagem de Arquitetura 

## TRACKINOS 

### 🚀 Integrantes
- <a href="https://www.linkedin.com/in/abner-silva-barbosa-8a3542225/">Abner barbosa</a>
- <a href="https://www.linkedin.com/in/arthur-fraige/">Arthur Fraige</a>
- <a href="https://www.linkedin.com/in/yveslevi/">Yves Lapa</a>
- <a href="https://www.linkedin.com/in/raissa-sabino/">Raissa Sabino</a>
- <a href="https://www.linkedin.com/in/pedro-gattai-096678227/">Pedro  Gattai</a>
- <a href="https://www.linkedin.com/in/sofia-moreiras-pimazzoni/">Sofia Pimazzoni</a>
- <a href="https://www.linkedin.com/in/emanuelcosta2/">Emanuel Costa</a>

## Sumário
* [Descrição ](#descricao)
* [Estrutura de pastas](#estrutura)
* [Documentação](#documentacao)
* [Instalação](#instalacao)
* [Histórico de Lançamentos](#historico)
* [Licença/license](#licenca)
* [Referências](#ref)

## 📜 <a id="descricao"> Descrição</a>

O projeto de automação de testes em funcionalidades CORE da plataforma CXM, desenvolvido pela TRACK.CO, surge da necessidade de mitigar os riscos associados aos deploys manuais e reduzir a frequência de rollbacks, visando proporcionar uma experiência mais estável para os clientes. Atualmente, a ausência de testes automatizados resulta em uma dependência significativa de testes manuais, tornando os deploys momentos críticos e propensos a erros, impactando negativamente na percepção dos clientes sobre a confiabilidade da plataforma e aumentando o risco de perda financeira para a empresa.

O objetivo central do projeto é implementar testes automatizados nessas funcionalidades críticas, especificamente em Pesquisas, Dashboards, Distribuição e Interação, para reduzir a probabilidade de regressões durante os deploys e permitir a detecção precoce de problemas potenciais. Essa estratégia não apenas contribuirá para uma melhoria substancial na confiança do cliente, mas também resultará em uma plataforma percebida como mais robusta e confiável.

Os benefícios esperados para a TRACK.CO são diversos, incluindo uma maior estabilidade e confiabilidade da plataforma, uma redução significativa de rollbacks, economia de tempo e recursos devido à automação, detecção precoce de problemas e melhoria da qualidade geral do software. A implementação dos testes automatizados também promoverá uma economia de custos a longo prazo e aumentará a competitividade da empresa no mercado de CX.

## Estrutura de pastas

No fluxo apresentando a baixo, estão descritos as pastas que são diretamente relacionadas a edição de código no projeto, execução de testes e visualização da documentação.

* 2024-T0003-ES09-G03<br>
  * src<br>
    * backend<br>
        * prisma<br>
        * src<br>
            * controller<br>
                * Client <br>
                * Employer <br>
            * model<br>
                * Answers <br>
                * Company <br>
                * Customer <br>
                * CustomersOnCompany <br>
            * routes<br>
            * scripts<br>
                * load
            * service<br>
                * Client <br>
                * Employer <br>
            * test<br>
            * utils<br>
    * frontend<br>
        * cypress <br>
            * e2e <br>
        * src <br>
            * api <br>
            * components <br>
            * pages <br>
            * test <br>
  * docs<br>
    * infográfico<br>
    * assets<br>
  * Readme.md

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>assets</b>: aqui estão os arquivos relacionados a parte gráfica do projeto, ou seja, as imagens e links de vídeos que os representam.

- <b>docs</b>: aqui estão todos os documentos do projeto.

- <b>src</b>: Todo o código fonte criado para o desenvolvimento do projeto, incluindo backend e frontend se aplicáveis (dentro das respectivas pastas, frontend e backend, a pasta src representa onde os principais arquivos de código estão alocados).

- <b>README.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

### 📄 <a id="documentacao"> Documentação</a>

A documentação está divida em difentes arquivos, cada um contendo um tópico especifico.

<a href="docs\arquitetura.md">arquitetura.md</a>: Nesse arquivo, se encontra o processo de instalação de todas as dependências de instalação necessárias para executar o projeto, além do manual de execução para os diversos componentes presentes no mesmo. <br>
<a href="docs\delivery.md">delivery.md</a>: Este arquivo apresenta o plano de delivery e de sustentação do projeto, que são essesnciais para que as expectativas do cliente estejam alinhadas com a entrega. <br>
<a href="docs\métricas.md">métricas.md</a>: Este arquivo apresenta as métricas de qualidade do projeto, que nada mais são do que medidas que auxiliam a garantir a qualidade do desenvolvimento do produto. <br>
<a href="docs\prototipacao.md">prototipacao.md</a>: Nesse arquivo se encontra todo o relatório do processo de prototipação do frontend, com a explicação do processo e acesso ao protótipo no Figma. <br>
<a href="docs\testes.md">testes.md</a>: Nesse arquivo se encontra o relatório com todos os testes realizados no projeto, os testes em questão avaliam diferentes componentes do projeto. O arquivo descreve as diversas tecnologias utilizadas para realizar testes, e apresentam prints de diversos resultados. <br>

## Histórico de lançamentos

* 1.0.0 - 16/02/2024
    * Documentação dos requisitos funcionais
    * Documentação do Diagrama C4 nível 1
    * Documentação do Diagrama C4 nível 2
    * Documentação da prototipação do Frontend
    * Documentação do Plano e casos de testes
    * Definição do controle de versionamento no GitHub
* 2.0.0 - 01/03/2024
    * Deploy do Frontend
    * Deploy do Backend
    * Configuração e deploy do Docker no projeto
    * Documentação das métricas de qualidade
    * Deploy e documentação dos testes de caixa branca
* 3.0.0 - 15/03/2024
    * Deploy e documentação dos testes de integração
    * Deploy e documentação dos testes do Cypress no projeto
    * Adição e documentação do Sonarqube no projeto
* 4.0.0 - 28/03/2024
    * Deploy e documentação dos testes de carga com K6 no projeto
    * Atualização das imagens do Docker 
    * Deploy do Grafana e suas depedências 
    * Documentação do infografico do projeto
 * 5.0.0 - 11/04/2024
    * Ajustes finais na codificação do projeto
    * Refatoração na documentação do projeto
    * Documentação do plano de delivery da solução
    * Documentação do plano de sustentação do projeto
    * Ajustes finais no Readme

## Licença

[Trackinos](#groupName) by <a href= "https://www.inteli.edu.br/">Inteli</a>, <a href="https://www.linkedin.com/in/abner-silva-barbosa-8a3542225/">Abner Silva</a>, <a href="https://www.linkedin.com/in/arthur-fraige/">Arthur Fraige</a>, <a href="https://www.linkedin.com/in/carolina-favaro-fricks-1a0423231/">Carolina Fricks</a>, <a href="https://www.linkedin.com/in/emanuelcosta2/">Emanuel Costa</a>, <a href="https://www.linkedin.com/in/pedro-gattai-096678227/">Pedro Gattai</a>, <a href="https://www.linkedin.com/in/raissa-sabino/">Raissa Sabino</a>, <a href="https://www.linkedin.com/in/sofia-moreiras-pimazzoni/">Sofia Pimazzoni</a>, <a href="https://www.linkedin.com/in/yveslevi/">Yves Levi</a>  is Licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## Referências bibliográficas
Node. Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Node. Disponível em: https://nodejs.org/docs/latest/api/ . <br><br>
Docker. Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Docker. Disponível em: https://docs.docker.com/ . <br><br>
K6.  Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia K6. Disponível em: https://k6.io/docs/ .<br><br>
Prisma.  Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Prisma. Disponível em: https://k6.io/docs/ .<br><br>
Grafana.  Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Grafana. Disponível em: https://grafana.com/ .<br><br>
Cypress.  Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Cypress. Disponível em: https://www.cypress.io/ .<br><br>
React.  Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia React. Disponível em: https://react.dev/ .<br><br>
Typescript.  Encontre respostas rapidamente com documentos e soluções utilizando a tecnologia Typescript. Disponível em: https://www.typescriptlang.org/ .<br>

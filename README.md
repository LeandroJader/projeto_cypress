# Projeto Cypress - Teste de Automação: Busca e Clique no Terceiro Link dos Mais Relevantes
### Este projeto contém um teste de automação usando o Cypress, que realiza buscas no DuckDuckGo e clica no terceiro link dentro da seção de resultados mais relevantes.

* 🎯 Objetivo do Teste
* ✅ Abrir o site do DuckDuckGo
* ✅ Fazer a pesquisa pela palavra-chave (exemplo: "uniplac")
* ✅ Aguardar os resultados
* ✅ Clicar no terceiro link visível dentro da seção de resultados relevantes, baseado na ordem de renderização dos resultados principais (ignora seções como anúncios ou rodapé)

* 🛠️ Tecnologias utilizadas
* Node.js

* Cypress

* Git
  
## Como Usar este Projeto de Automação com Cypress

* 📌 Pré-requisitos:
Antes de rodar o projeto, garanta que você tem instalado:

* Node.js (versão 14 ou superior)

* NPM (gerenciador de pacotes que vem com o Node.js)

* Git (se quiser clonar o projeto via terminal)

* Cypress (já incluso no package.json, será instalado ao rodar o npm install)

## 📥 Passo a Passo:
* Clone o repositório:

* bash
* Copiar
* Editar

## git clone https://github.com/LeandroJader/projeto_cypress.git

### Acesse a pasta do projeto:

* bash
* Copiar
* Editar
* cd projeto_cypress
## Instale as dependências:

* bash
* Copiar
* Editar
* npm install
### Abra a interface do Cypress:

* bash
* Copiar
* Editar
* npx cypress open
* Dentro da interface do Cypress:

### Navegue até a aba "E2E Testing"

* Selecione o navegador que deseja usar (Chrome, Edge, Electron, etc)

* Clique no arquivo de teste:

* cypress/e2e/busca_terceiro_link.cy.js

* O que vai acontecer ao rodar o teste:

* O Cypress abrirá o navegador, fará a busca por "uniplac" no DuckDuckGo e clicará automaticamente no terceiro link da seção de resultados relevantes.





## API GitHub 

> 🤓 Teste Lógico: https://github.com/HortenciaCorts/api-github/tree/main/src/TesteLogico

🌱 Desafio utilizando a API do GitHub 
🚧 Projeto em andamento

### Conteúdo

<p align="center">  
	<a href="#sobre-desafio">Sobre o desafio</a> •
	<a href="#prototipo">Protótipo da aplicação</a> •
	<a href="#requisitos">Requisitos</a> •
	<a href="#layout">Layout</a> • 
	<a href="#executar-projeto">Como executar o projeto</a> • 
	<a href="#tecnologias">Tecnologias</a> • 
	<a href="#autora">Autora</a>  
</p>

### 💻 Sobre o desafio<a id="sobre-desafio"></a>

A aplicação sera uma PWA que funcionará em cima da api do github [Documentação API GITHUB](https://developer.github.com/v3/ "Api Github"), onde deve existir uma tela de login que o usuário digitará o nickname de um usuário do github, ao buscar esse usuário, ele deve ser redirecionado para uma tela interna onde estará disponível informações gerais do usuário conforme o protótipo, com uma navegação de tabs para **Início**, **Repositórios**, **Seguidores**, **Seguindo**.

### 📱 Protótipo da aplicação<a id="prototipo"></a>

-   O protótipo do aplicativo está disponível no link  [link](https://xd.adobe.com/view/1798f30c-7746-444c-bffa-91b29835eef5-42cb/ "Protótipo")  (tente reproduzir o layout da forma mais fiel possível)
### 🎨  Layout <a id="layout"></a>
![Gif com imagens do desafio](https://github.com/HortenciaCorts/api-github/blob/main/src/images/api-github.gif?raw=true)

### 📚  Requisitos <a id="requisitos"></a>
- **Não funcionais**

- [x]  O aplicativo deve usar reactjs.
- [x] Você deve gerenciar suas rotas com o react-router.
- [x] Você deve gerenciar todo o estado do aplicativo com redux ou Context Api.
- [ ] Para estilizar o aplicativo, adoraríamos ver você usando componentes estilizados, mas não é obrigatório.
- [ ] Adoraríamos ver você usando Typescript para tipar os dados, mas não é obrigatório.

- **Funcionais**

- [x] Você deve permitir que um usuário seja autenticado buscando pelo username do github
- [x] Você deve armazenas as informações de (login, name, email, location, company, bio, avatar_url, followers_url, following_url, organizations_url, starred_url, public_repos, public_gists, followers, following)
- [ ] Você deve possuir uma navegação por abas com items ("Início", "Repositórios", "Seguidores", "Seguindo")
- [ ] Quando clicado nas abas deve ser exibido as listagens respectivas de ("Início", Repositórios: repos_url, Seguidores: followers_url e Seguindo: following_url)
- [ ] Quando o usuário estiver dentro de uma aba de seguidores ou seguindo, você deve ter um botão que torne aquele usuário o principal da aplicação, substituindo o usuário salvo na autenticação pelo usuário da tela atual.
- [x] Na tela início, você deve ter um botão que permita o usuário sair da aplicação o redirecionando para a tela de autenticação
-   Na tela início, você deve apenas renderizar as informações do protótipo se a informação de fato existir no retorno da requisição de autenticação.

### 🚀  Como executar o projeto <a id="executar-projeto"></a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:  [Git](https://git-scm.com/),  [Node.js](https://nodejs.org/pt-br/)

Além disto é bom ter um editor para trabalhar com o código como  [VSCode](https://code.visualstudio.com/)

#### 🎲Rodando a Aplicação

     # Clone este repositório
	     git clone https://github.com/HortenciaCorts/api-github
     # Acesse a pasta do projeto no terminal
	     cd api-github
     # Instale a dependência do npm
	     npm install
     # Execute a aplicação em modo de desenvolvimento
	     npm start 
     # O servidor iniciará na porta: 3000
     # Acesse http://localhost:3000

### 🛠 Tecnologias <a id="tecnologias"></a>

Esse projeto foi desenvolvido com as seguintes tecnologias:
- React
- React-router
- Redux
- Axios
- NodeJS
- CSS

### 👧 Autora <a id="autora"></a>

Feito com 💖🥵😵 por Hortência Côrtes 👩‍💻 
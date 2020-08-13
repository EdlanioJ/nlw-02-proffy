<h1 align="center">
    <img alt="Proffy" title="Proffy" src=".github/proffy.svg" width="220px" />
</h1>
<h4 align="center">
    🚀 Next Level Week #2 by <a href="https://rocketseat.com.br">Rocketseat</a>
</h4>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-executar">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EdlanioJ/nlw-02-proffy">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</a>
<p align="center">
  <img alt="Proffy" src=".github/proffy.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto

O Proffy é uma plataforma que visa ajuda pessoas a encontrar professores qualificadas e entrar em contato com eles.

## 🔖 Layout

Você pode visualizar o layout do projeto através dos links abaixo:

[Mobile](https://www.figma.com/file/hcqByBnWyFQcrgK7xVDOp5/Proffy-Mobile-Copy?node-id=0%3A1);

[Web](https://www.figma.com/file/CiMhXoD1yG34nYKtea63tz/Proffy-Web-Copy?node-id=0%3A1);

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

## :gear: Executar

Para executar esta aplicação você vai precisar baixar: [Git](https://git-scm.com), e [Node.js](https://nodejs.org) + [Yarn](https://yarnpkg.com/).

```bash javascript
# Clone este repositório:
$ git clone https://github.com/EdlanioJ/nlw-02-proffy.git
$ cd nlw-02-proffy
```

### backend

```bash javascript
# Entre na pasta do repositório, em seguida na pasta do backend:

cd server

# Instale as dependências:

yarn
ou
npm install

# Execute as migrations:

yarn knex:migrate
ou
npm knex:migrate

# Inicie a API:

yarn dev:start
ou
npm dev:start

# A API roda por padrão na porta 3333.
```
Para testes, utilize um cliente HTTP como o [Insomnia](https://insomnia.rest) ou [Postman](https://www.postman.com/).

### Aplicação web

```bash javascript
# Entre na pasta do repositório, em seguida na pasta web:
cd web

# Instale as dependências:

yarn
ou
npm install

# Execute o projeto em modo desenvolvimento:

yarn start
ou
npm start

# O frontend(web) roda por padrão na porta 3000.

# O backend têm de estar a rodar.
```

### Aplicação mobile

```bash
# Entre na pasta do repositório, em seguida na pasta mobile:

cd mobile

# Instale as dependências:

yarn
ou
npm install

# Execute o projeto em modo desenvolvimento:

yarn start
ou
npm start

# Para testes, utilize um dispositivo físico com o aplicativo do Expo ou emuladores.

# Altere a variavel SERVER_LINK no .env com o IP que o expo fornecer.

# O backend têm de estar a rodar.
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

Feito com ♥ by Edlâneo Manuel

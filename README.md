# Desafio Técnico DTI Digital - Round (Node.js + Express + Docker)

Criação de um micro-serviço para visualização da temperatura atual de uma cidade, além de um status de alerta, com base na API OpenWeatherMap. É utilizado como linguagem padrão o Inglês, porém é possível de alteração.

Existem três endpoints, um padrão com links pessoais e documentação, o endpoint name recebe como parâmetro o nome da cidade e o endpoint coords, que recebe como parâmetro a latitude e a longitude. Ambos nome e coords retornam a classe com as informações requisitadas

## Instalação utilizando Docker

Crie a imagem:

```
$ docker build -f Dockerfile -t desafio-tecnico-round .
```

Rode o container:

```
$ docker run -p 3000:3000 desafio-tecnico-round
```

E pronto!

## Instalação utilizando npm

Instale as dependências:

```
$ npm install
```

Use o comando abaixo para gerar a documentação junto do projeto:

```
$ npm run swagger-autogen
```

Use o comando abaixo para rodar o projeto sem gerar documentação:

```
$ npm start
```

## Acesso em:

Após isso, acesse o projeto em:

http://localhost:3000

Acesse a documentação em:

http://localhost:3000/doc
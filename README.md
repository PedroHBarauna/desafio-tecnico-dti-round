# Desafio Técnico DTI Digital - Round (Node.js + Express + Docker)

Criação de um micro-serviço para visualização da temperatura atual de uma cidade, além de um status de alerta, com base na API OpenWeatherMap.

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
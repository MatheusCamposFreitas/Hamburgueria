# Hamburgueria

Hamburgueria é um projeto para gerenciar 

## Desafio

Então, partindo de um banco de dados em que tenha um ID, o nome dos produtos e o seu valor, crie uma página onde se possam ATUALIZAR os produtos (nome ou valor) a partir do seu ID, buscando os dados atuais do banco e após a alteração que grave os dados atualizados novamente.

## Tecnologias

1. NodeJs 18.15.0
2. MySql 8.0.32
3. HTML, CSS e JavaScript

## Packages

1. cors@2.8.5
2. express@4.18.2
3. mysql@2.18.1

## Configuração

1. Tenha as Tecnologias acima na sua máquina para que o projeto possa funcionar.

> OBS: A versão do package mysql na versão 2.18.1 possui um conflito com MySql versão 8.0.32 gerando problema com a comunicação de ambos solicitando sempre "Update your Client Serve". E uma solução que encontrei foi:
>
>Dentro do banco use:
>>
>>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
>>
>>FLUSH PRIVILEGES;
>
>Esse comando fará com que seu banco de dados use a versão de autenticação anterior que é compatível com o package mysql 2.18.1.

2. Crie um banco de dados chamado `hamburguer` 

3. Dentro do arquivo `db-script.js` configure as informações do seu banco de dados

4. No terminal dentro da pasta do projeto execute o comando `node .\db-script` para criar uma tabela e dados fictícios no banco.

5. Execute o comando `node .\server.js` para subir o servidor.

6. Excute o arquivo index.html e teste a aplicação.
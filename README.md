# Desafio 01: Conceitos do NodeJS

Desenvolvimento de uma simples aplicação utilizando Express.
Este projeto foi feito devido a um desafio dentro de um treinamento de bootcamp na [@Rockeseat](https://github.com/Rocketseat).

Essa aplicação não segue as regras de estrutura de um projeto real, é um [código espaguete](https://pt.wikipedia.org/wiki/C%C3%B3digo_espaguete) e terá como objetivo o armazenamento de projetos e tarefas em tempo de execução, somente.

## Rotas

- `POST /projects`: Recebe `id` e `title` dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`;

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota altera apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deleta o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota recebe um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Utilizando a rota `POST /projects` passando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: 'Novo projeto',
    tasks: ['Nova tarefa']
  }
]
```

## Middlewares

- Criado um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Criado um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;


## Licença
Sinta-se à vontade para usar, fazer fork e enviar um pull request.

# Receitas 

API para cadastro de receitas com Node, Sequelize e Postgres 
[(Acessar no Google Cloud)](https://elite-nuance-252812.appspot.com/recipes)


## Endpoints

### Recuperar Receitas
<strong>```GET /recipes```</strong>: Retorna todas as receitas cadastradas.

### Cadastrar Receita
As informações para cadastro são: título (texto), ingredientes (lista), modo de preparo (texto).

<strong>```POST /recipes```</strong>

exemplo JSON:
```
{
	"title": "Arroz",
	"ingredients": ["água", "arroz", "sal"],
	"preparation_mode": "..."
}
```
Resposta:
```
	201 Created
	{ status: "Recipe added with ID: 1"}
```

### Recuperar Receita
<strong>```GET /recipes/{ID}```</strong>: Retorna uma receita, conforme ID informado.

Resposta:
```
{
	id: 1,
	title: "Arroz",
	ingredients: ["água", "arroz", "sal"],
	preparation_mode: "...",
	createdAt: "2019-09-21T00:00:39.885Z",
	updatedAt: "2019-09-21T00:00:39.885Z"
}
```

### Atualizar Receita
<strong>```PUT /recipes/{ID}```</strong>: Atualiza informações na receita, conforme o ID.

exemplo JSON:
```
{
	"title": "Arroz",
	"ingredients": ["água", "arroz", "sal"],
	"preparation_mode": "..."
}
```
*Obs: os campos não são obrigatórios, serão sobrescritos apenas os campos informados.*
Resposta:
```
200 OK
{ "status": "recipe modified" }
```

### Excluir Receita
<strong>```DELETE /recipes/{ID}```</strong>: Exclui uma receita, conforme ID informado.

Resposta:
```
200 OK
{ "status": "Recipe deleted" }
```


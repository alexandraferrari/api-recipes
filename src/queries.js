const models = require('./models')

const getRecipes = async (req, res) => {
  await models.recipe.findAll(
    // { attributes: ['id', 'title'] }  // to select just some attibutes
  ).then((recipes) => {
    res.status(200).json(JSON.parse(JSON.stringify(recipes)))
  }).catch((err) => {
    console.log(err);
    res.status(200).json({ status: "no found recipes" })
  })
}
    
const getRecipeById = async (req, res) => {
  const id = parseInt(req.params.id)

  await models.recipe.findByPk(id).then((recipe) => {   
    if(recipe)
      res.status(200).json(recipe)
    else
      res.status(200).json({ status: "no found recipe" })
  }).catch((err) => {
    console.log(err);
    res.status(200).json({ status: "no found recipe" })
  })    
}

const createRecipe = async (req, res) => {
  const { title, ingredients, preparation_mode } = req.body
  await models.recipe.create({title, ingredients, preparation_mode}).then((recipe) =>{
    res.status(201).json({ status: `Recipe added with ID: ${recipe.id}` })
  }).catch((err) => {
    console.log(err);
    res.status(200).json({status: "not created recipe"})
  })
}

const updateRecipe = async (req, res) => {
  const id = parseInt(req.params.id)
  const { title, ingredients, preparation_mode } = req.body

  await models.recipe.update({ title, ingredients, preparation_mode }, {
    where: {
      id: id
    }
  }).then((recipe) => {
    console.log("updated", recipe);
    res.status(200).json({ status: `recipe modified` })
  }).catch((err) => {
    console.log(err);
    
  })
}

const deleteRecipe = async (req, res) => {
  const id = parseInt(req.params.id)

  await models.recipe.destroy({
    where: {
      id
    }
  }).then((recipe) => {
    console.log(typeof(recipe));
    
    res.status(200).json({ status: `Recipe deleted` })
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
}
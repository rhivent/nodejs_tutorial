/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//server-side rendering
module.exports = {
  categoriesPage:  async (req, res) => {   	  	
  	try {
  		const categories = await Categories.find({});  		
      //console.log(`categories = ${JSON.stringify(categories)}`);
  		res.view('pages/categoriesPage', { categories });	
  	} catch(error) {
  		res.status(500).send({
  			error: `Database error: ${error}`
  		});  		
  	}  
  },   
  addCategory:  async (req, res) => {   	  	
  	try {
  		const {categoryName, description} = req.body;  		
  		const newCategory = await Categories.create({categoryName, description});
  		res.redirect('/categories/categoriesPage');
  	} catch(error) {
  		res.status(500).send({
  			error: `Database error: ${error}`
  		});  		
  	}  
  }, 
  deleteCategory:  async (req, res) => {   	  	
  	try {
  		const {id} = req.params;  		
  		await Categories.destroy({id});
  		res.redirect('/categories/categoriesPage');
  	} catch(error) {
  		res.status(500).send({
  			error: `Database error: ${error}`
  		});  		
  	}  
  }, 
  editCategory:  async (req, res) => {//Open "Edit Category form"   	  	
  	try {
  		const {id} = req.params;  		
  		const category = await Categories.findOne({id});
      //console.log(`category = ${JSON.stringify(category)}`);
  		if (category) {
  			 res.view('pages/editCategory', {category: category});               
  		}  		
  	} catch(error) {
  		res.status(500).send({
  			error: `Database error: ${error}`
  		});  		
  	}  
  }, 
  updateCategory:  async (req, res) => {//Open "Edit Category form"   	  	
  	try {
  		const {id} = req.params; 
  		const {categoryName, description} = req.body;  		  		
      console.log(`aa112: ${id}, categoryName = ${categoryName}, description = ${description}`);
  		const category = await Categories.update({id}, {categoryName, description});
  		res.redirect('/categories/categoriesPage');
  	} catch(error) {
  		res.status(500).send({
  			error: `Database error: ${error}`
  		});  		
  	}  
  }, 
};


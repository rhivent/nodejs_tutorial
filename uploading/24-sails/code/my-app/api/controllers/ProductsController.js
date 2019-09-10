/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//Use res.json
module.exports = {
  findAll:  async (req, res) => {   	  	
  	try {
  		const {limit, skip} = req.query;
  		console.log(`limit = ${limit}, skip = ${skip}`);
  		const products = await Products.find({where: {  }, limit, skip});  		
      const totalProducts = await Products.count({});
      res.json({
      		result: "ok",
      		message: "Query all products successfully",
      		data: products,
          numberOfPages: Math.ceil(totalProducts/limit)
      	});
  	} catch(error) {  		
  		res.json({
  			result: "failed",
  			message: `Query all products error: ${error}`
  		});
  	}  
  },   
  findByID:  async (req, res) => {         
    try {
      const {id} = req.params;    
      if (id == null || id.length === 0) {
        res.json({
          result: "failed",       
          message: `Cannot find Product to show`
        });
          return
      }
      const product = await Products.findOne({id});
      res.json({
          result: "ok",
          message: "Show detail product successfully",
          data: product
        });
    } catch(error) {
      res.json({
        result: "failed",       
        message: `Cannot find product: ${error}`
      });
    }  
  }, 
 
  filterProducts:  async (req, res) => {   	  	
  	try {
  		const {nameContains} = req.params;
  		const products = await Products.find({ 
  			productName: { contains: nameContains } 
  		});  		
      	res.json({
      		result: "ok",
      		message: "Filter products successfully",
      		data: products
      	});
  	} catch(error) {  		
  		res.json({
  			result: "failed",  			
  			message: `Filter products error: ${error}`
  		});
  	}
  },   

  addProduct:  async (req, res) => {   	  	
  	try {
  		console.log("addProduct");
  		const {productName, imageURL, categoryID, unit, price} = req.body;  		
  		const newProduct = await Products.create({productName, imageURL, categoryID, unit, price}).fetch();  		
  		res.json({
      		result: "ok",
      		message: "Create new Product successfully",
      		data: newProduct
      	});
  	} catch(error) {
  		res.json({
  			result: "failed",  			
  			message: `Create new Product failed: ${error}`
  		});
  	}  
  }, 

  deleteProduct:  async (req, res) => {   	  	
  	try {
  		const {id} = req.params;  	
  		if (id == null || id.length === 0) {
  			res.json({
  				result: "failed",  			
  				message: `Cannot find Product to delete`
  			});
      		return
  		}
  		const deletedProduct = await Products.destroy({id}).fetch();
  		res.json({
      		result: "ok",
      		message: "Delete successfully",
      		data: deletedProduct
      	});
  	} catch(error) {
  		res.json({
  			result: "failed",  			
  			message: `Delete a product failed: ${error}`
  		});
  	}  
  }, 

  updateProduct:  async (req, res) => {//Open "Edit Product form"   	  	
  	try {
  		const {id} = req.params;   		
  		const {productName, imageURL, categoryID, unit, price} = req.body;  		  		
  		console.log(`productName = ${JSON.stringify(productName)}`);
      	//console.log(`aa112: ${id}, productName = ${productName}, description = ${description}`);
      	let foundProduct = await Products.findOne({id});  		
      	if (foundProduct == null) {
      		res.json({
  				result: "failed",  			
  				message: `Cannot find Product to update`
  			});
      		return
      	}      	      	
  		let updatedProducts = await Products.update({id}, {
  			productName: 	productName != null ? productName : foundProduct.productName, 
  			imageURL: 		imageURL != null ? imageURL : foundProduct.imageURL, 
  			categoryID: 	categoryID != null ? categoryID : foundProduct.categoryID, 
  			unit: 			unit != null ? unit : foundProduct.unit,  
  			price: 			price != null ? price : foundProduct.price 
  		}).fetch();  		
  		res.json({
      		result: "ok",
      		message: "Update a product successfully",
      		data: updatedProducts[0]
      	});
  		
  	} catch(error) {
  		res.json({
  			result: "failed",  			
  			message: `Update a product failed: ${error}`
  		});
  	}  
  }, 
};

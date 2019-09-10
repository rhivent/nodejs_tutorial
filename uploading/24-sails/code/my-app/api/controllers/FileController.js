/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const fs = require('fs')
module.exports = {
  index: async (req,res) => {

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
    '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="imageFile" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
    )
  },
  uploadImage: async (req,res) => {
    req.file('filename').upload({dirname : process.cwd() + '/assets/images/uploads/'}, (err, uploadedFiles) => {
      if (err) return res.serverError(err);
        //sails.getBaseUrl()
        const filename = uploadedFiles[0].fd.substring(uploadedFiles[0].fd.lastIndexOf('/')+1);
        const uploadLocation = `${process.cwd()}/assets/images/uploads/${filename}`;        
        const tempLocation = `${process.cwd()}/.tmp/public/images/uploads/${filename}`;
        const urlString = `${sails.config.custom.baseUrl}/images/uploads/${filename}`;
        //Copy the file to the temp folder so that it becomes available immediately
        fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));
        return res.json({
          message: uploadedFiles.length + ' file(s) uploaded successfully!',
          files: uploadedFiles,
          urlString
        });
    });  	
  }
  
};
//http://localhost:1337/images/uploads/4e88716e-7459-4eeb-be11-e454efd1071a.png

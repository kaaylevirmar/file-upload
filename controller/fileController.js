const File = require('../models/file');


exports.fileForm = (req, res) => {
    res.render('upload-form');
}

exports.addFile =  async (req,res) => {

    const fileData = req.file; // Contains the uploaded file data
  console.log(fileData);
    if (fileData) {
      const newFile = new File({
        filename: fileData.originalname,
        contentType: fileData.mimetype,
        data: fileData.buffer
      });
  
      await newFile.save();
  
      res.redirect('/upload'); // Redirect to the upload form or another page
    } else {
      res.status(400).send('No file uploaded.');
    }
}

exports.imageView = async (req,res)=>{
    const fileId = req.params.id;
    const file = await File.findById(fileId);
    // res.send(file);
    res.render('image_display', { file });
}



const express = require('express');
const app = express();
 // For handling file uploads
const File = require('./models/file'); // Path to your Mongoose model
const mongoose =require('mongoose');
const fileRouters = require('./router/fileRouters');





mongoose.connect('mongodb://127.0.0.1:27017/upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.set('view engine', 'ejs');




app.use('',fileRouters);




//   app.post('/upload', upload.single('file'), async (req, res) => {

//     console.log('hello');
//     const fileData = req.file; // Contains the uploaded file data
  
//     if (fileData) {
//       const newFile = new File({
//         filename: fileData.originalname,
//         contentType: fileData.mimetype,
//         data: fileData.buffer
//       });
  
//       await newFile.save();
  
//       res.redirect('/upload'); // Redirect to the upload form or another page
//     } else {
//       res.status(400).send('No file uploaded.');
//     }
//   });
  

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

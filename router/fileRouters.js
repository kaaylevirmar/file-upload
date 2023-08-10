const express = require('express');
const multer = require('multer');
const router = express.Router();

const {fileForm,addFile,imageView} = require('../controller/fileController');


const storage = multer.memoryStorage(); // Store the uploaded file in memory as a Buffer
const upload = multer({ storage: storage });

router.get('/upload', fileForm);
router.post('/upload',upload.single('file'), addFile);
router.get('/file/:id',imageView);



module.exports = router;
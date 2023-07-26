const multer = require('multer');
const path = require('path');


// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the folder where the images will be saved
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

// Upload route
app.post('/api/upload', upload.single('image'), (req, res) => {
  // The file will be saved in the 'uploads/' folder based on the storage configuration
  // You can perform additional tasks here, such as saving the file path to a database

  //res.json({ message: 'Image uploaded successfully' });
  //New code
  try {
    // If everything is successful, send a success response
    res.json({ message: 'Image uploaded successfully' });
  } catch (error) {
    // If there is an error, send an error response
    res.status(500).json({ error: 'Error uploading image' });
  }
});

// Other routes and server setup...

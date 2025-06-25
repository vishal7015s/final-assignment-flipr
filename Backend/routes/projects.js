// const express = require('express');
// const router = express.Router();
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const { addProject } = require('../controllers/projectController');

// // Configure Cloudinary (replace with your credentials)
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Configure Multer with Cloudinary storage
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'projects',
//     allowed_formats: ['jpg', 'png', 'jpeg'],
//     transformation: [{ width: 450, height: 350, crop: 'fill' }], // Crop image to 450x350 (bonus feature)
//   },
// });
// const upload = multer({ storage: storage });

// // Route: Add a new project
// router.post('/projects', upload.single('image'), addProject);

// module.exports = router;



const express = require("express")
const router = express.Router()


const {addProject, getAllProjects} = require("../controllers/Project")


router.post("/createProject", addProject);
router.get("/projects", getAllProjects); 

module.exports = router
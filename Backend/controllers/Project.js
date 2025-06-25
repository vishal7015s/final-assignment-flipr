const Project = require('../models/Project');
const { uploadImageToCloudinary } = require("../utils/imageUploader")
require("dotenv").config();

exports.addProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        // const image = req.file ? req.file.path : null; // Cloudinary URL
        const image = req.files.pimage

        console.log("before hit")
        if (!name || !description || !image) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        console.log("after hit")


        const projectImage = await uploadImageToCloudinary(image, process.env.FOLDER_NAME);

        const newProject = await Project.create({
            image: projectImage.secure_url,
            name,
            description
        })

        res.status(201).json({
            message: 'Project added successfully',
            data: newProject
        });

    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};


exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      message: 'Projects fetched successfully',
      data: projects,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      message: 'Server error',
    });
  }
};
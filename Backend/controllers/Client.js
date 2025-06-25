const Client = require('../models/Client');
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();

exports.addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.files.cimage; // Assuming file field is named 'cimage'

    if (!name || !description || !designation || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Upload image to Cloudinary with cropping
    const clientImage = await uploadImageToCloudinary(image,process.env.FOLDER_NAME);

    const newClient = await Client.create({
      image: clientImage.secure_url,
      name,
      description,
      designation,
    });

    res.status(201).json({
      message: 'Client added successfully',
      data: newClient,
    });
  } catch (error) {
    console.error('Error adding client:', error);
    res.status(500).json({
      message: 'Server error',
    });
  }
};


exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      message: 'Clients fetched successfully',
      data: clients,
    });
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({
      message: 'Server error',
    });
  }
};
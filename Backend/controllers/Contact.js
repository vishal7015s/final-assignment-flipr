const Contact = require("../models/Contact")

// exports.createContact = async (req, res) => {
//     try {
//         console.log("hit")
//         const { fullName, email, mobileNumber, areaCity } = req.body;

//         if (!fullName || !email || !mobileNumber || !areaCity) {
//             return res.status(400).json({ error: 'All fields are required' });
//         }

//         const contactDetails = await Contact.create({
//             fullName,
//             email,
//             mobileNumber,
//             areaCity
//         })
        
//         res.status(201).json({
//             message: 'Contact form created successfully',
//             data: contactDetails
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: false,
//             error: error.message
//         })
//     }
// };


exports.createContact = async (req, res) => {
  try {
    console.log("hit"); // Debug log
    const { fullName, email, mobile, city } = req.body; // Updated to match frontend

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contactDetails = await Contact.create({
      fullName,
      email,
      mobileNumber: mobile, // Map mobile to mobileNumber
      areaCity: city, // Map city to areaCity
    });

    res.status(201).json({
      message: 'Contact form created successfully',
      data: contactDetails,
    });
  } catch (error) {
    console.error('Error creating contact:', error); // Debug log
    res.status(500).json({
      message: 'Server error', // Fixed from false
      error: error.message,
    });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      message: 'Contact form submissions fetched successfully',
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      message: 'Server error',
    });
  }
};
// const express = require('express');
// const router = express.Router();


// // const contactController = require('../controllers/Contact');
// const {createContact, getAllContacts} = require("../controllers/Contact")


// router.post('/contact', createContact);
// router.get('/contacts', getAllContacts); // New GET route


// module.exports = router;

const express = require('express');
const router = express.Router();

const { createContact, getAllContacts } = require("../controllers/Contact");

router.post('/contact', createContact);
router.get('/contact', getAllContacts); // Changed from /contacts to /contact

module.exports = router;

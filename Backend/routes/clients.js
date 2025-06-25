const express = require('express');
const router = express.Router();

const { addClient, getAllClients } = require('../controllers/Client');

router.post('/client', addClient);
router.get('/clients', getAllClients); 



module.exports = router;

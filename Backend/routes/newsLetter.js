const express = require('express');
const router = express.Router();


const { addNewsletter, getAllNewsletters } = require('../controllers/newsLetter');

router.post('/newsletter', addNewsletter);
router.get('/newsletters', getAllNewsletters);


module.exports = router;
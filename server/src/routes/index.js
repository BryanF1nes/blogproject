const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello this is a GET request..' })
});

module.exports = router;
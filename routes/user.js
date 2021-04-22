const  express = require('express')
const router = express.Router();
const userController = require('../Controllers/user')

router.get('/users',userController.getUser);
router.post('/create-user',userController.createUser);

module.exports = router;
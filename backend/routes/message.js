const express = require('express');
const router = express.Router();
const messageCtrl = require('../controllers/message');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, messageCtrl.getAllMessage);
router.get('/:id', auth, messageCtrl.getOneMessage);
router.post('/', auth, multer, messageCtrl.createMessage);
router.put('/:id', auth, multer, messageCtrl.updateMessage);
router.delete('/:id', auth, messageCtrl.deleteMessage);
router.post('/like', auth, messageCtrl.likeMessage);

module.exports = router;
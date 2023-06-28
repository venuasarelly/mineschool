const express = require('express');

const {
    StudentRegister,
    contactForm,
    videoUpload

 } =require('../controller/student/index')

const router = express.Router();

router.post('/create', StudentRegister);
router.post('/contact',contactForm);
router.post('/video',videoUpload);

module.exports = router;
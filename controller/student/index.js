const asynchandler = require('express-async-handler');
const StudentData = require('../../model/studentSchema');
const contactData = require('../../model/contactus');
const videoData = require('../../model/videoSchema');
const dotenv = require('dotenv').config();
const { ObjectId } = require("mongodb");
const multer = require('multer')
const json2xls = require('json2xls');
const fs = require('fs');
const path = require('path');
const os = require('os');

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: Storage
}).fields([
  { name: 'documentUpload1', maxCount: 1 },
  { name: 'documentUpload2', maxCount: 1 },
 { name: 'documentUpload3', maxCount: 1 },
 {name : 'videoUploads',maxCount:1}
]);

const StudentRegister = asynchandler(async (req, res) => {
  try {
    // Upload the files
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred during file upload
        return res.status(400).json({ message: err.message });
      } else if (err) {
        // An unknown error occurred during file upload
        return res.status(500).json({ message: 'File upload failed' });
      }

      // File upload successful, proceed to save the student data
      const {
        firstname,
        lastname,
        gender,
        dob,
        classAdmission,
        religion,
        nationality,
        caste,
        correspondenceAddress,
        tel,
        fax,
        languagesKnown,
        distanceFromSchool,
        preferredPhoneNumberForSMS,
        emergencyContact,
        residentialAddress,
        relationship,
        parentname,
        occupation,
        age,
        parentdesignation,
        parentnationality,
        officialAddress,
        educationalQualification,
        annualIncome,
        institution,
        mobileNumber,
        previousSchool,
        siblings,
        schoolName,
        staffWard,
        warddesignation
      } = req.body;

      const newStudent = new StudentData({
        firstname,
        lastname,
        gender,
        dob,
        classAdmission,
        religion,
        nationality,
        caste,
        correspondenceAddress,
        tel,
        fax,
        languagesKnown,
        distanceFromSchool,
        preferredPhoneNumberForSMS,
        emergencyContact,
        residentialAddress,
        relationship,
        parentname,
        occupation,
        age,
        parentdesignation,
        parentnationality,
        officialAddress,
        educationalQualification,
        annualIncome,
        institution,
        mobileNumber,
        previousSchool,
        siblings,
        schoolName,
        staffWard,
        warddesignation,
        documentUpload1: {
          data: req.files['documentUpload1'][0].filename,
          contentType: 'image/png'
        },
        documentUpload2: {
          data: req.files['documentUpload2'][0].filename,
          contentType: 'image/png'
        },
        documentUpload3: {
          data: req.files['documentUpload3'][0].filename,
          contentType: 'image/png'
        }
      });

      await newStudent.save();

      res.status(201).json({ message: 'Student data created successfully' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

const contactForm = asynchandler(async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      const newSubmission = new contactData({
        name,
        email,
        phone,
        message
      });
  
      const savedSubmission = await newSubmission.save();
  
      res.status(201).json({ message: 'Contact form submitted successfully', submission: savedSubmission });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
})
 

const videoUpload = asynchandler(async (req, res) => {
  try {
    // Upload the files
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred during file upload
        return res.status(400).json({ message: err.message });
      } else if (err) {
        // An unknown error occurred during file upload
        return res.status(500).json({ message: 'File upload failed' });
      }

      const { title, name, email } = req.body;
      const newSubmission = new videoData({
        name,
        email,
        title,
        videoUploads: {
            data: req.files['videoUploads'][0].filename,
            contentType: 'video/mp4'
          }
        
      });
      const savedSubmission = await newSubmission.save();

      res.status(201).json({ message: 'Video form submitted successfully', submission: savedSubmission });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = {
    StudentRegister,
    contactForm,
    videoUpload 
  }
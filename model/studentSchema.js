const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  documentUpload1: {
    data : Buffer,
    contentType : String
  },
  documentUpload2: {
    data : Buffer,
    contentType : String
  },
  documentUpload3: {
    data : Buffer,
    contentType : String
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  classAdmission: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  caste: {
    type: String,
    required: true
  },
  correspondenceAddress: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  fax: {
    type: String,
    required: true
  },
  languagesKnown: {
    type: [String],
    required: true
  },
  distanceFromSchool: {
    type: String,
    required: true
  },
  preferredPhoneNumberForSMS: {
    type: String,
    required: true
  },
  emergencyContact: {
    type: String,
    required: true
  },
  residentialAddress: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
    required: true
  },
  parentname: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  parentdesignation: {
    type: String,
    required: true
  },
  parentnationality: {
    type: String,
    required: true
  },
  officialAddress: {
    type: String,
    required: true
  },
  educationalQualification: {
    type: String,
    required: true
  },
  annualIncome: {
    type: Number,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  previousSchool: {
    type: String,
    required: true
  },
  siblings: {
    type: Number,
    required: true
  },
  schoolName: {
    type: String,
    required: true
  },
  staffWard: {
    type: String,
    required: true
  },
  warddesignation: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('StudentData', studentSchema);

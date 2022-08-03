const express = require('express');
const router = express.Router();
const {
  signUpUser,
  getDonor,
  getDonorId,
  deleteDonorById,
  updateSingleDonorById,
} = require('../controllers/user.controller');


/* 
    POST http://localhost:4321/auth/signup
*/
router.post('/signup',signUpUser);
router.get('/donor', getDonor);
router.get('/donor/:id', getDonorId);
router.delete('/donor/:id', deleteDonorById);
router.delete('/donor/:id', deleteDonorById);
router.put('/donor/:id', updateSingleDonorById);

module.exports = router;

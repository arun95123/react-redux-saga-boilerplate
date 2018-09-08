const express = require('express');
const router=express.Router();
const getDataService= require('../service/get-data');

router.get('/data',(req,res) => {
  getDataService.getData().then(response => {
    return res.json(response);
  }).catch(err => {
    console.log('API CALL FAILED');
  })
});

module.exports = router;

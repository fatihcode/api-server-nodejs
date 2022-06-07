const express = require('express')
const userModel = require('../model/userModel')
const router = express()


router.get('/', (req, res) => {

   userModel.find()
      .then(data => { res.json(data) })
      .catch(err => { res.json(err) })
})


router.get('/:id', (req, res) => {

   userModel.findById(req.params.id)
      .then(data => { res.json(data) })
      .catch(err => { res.status(400).json(err) })
})


router.post('/', (req, res) => {
   console.log(req.body);
   const user = new userModel(req.body)

   user.save()
      .then(data => { res.json(data) })
      .catch(err => { res.status(400).json(err) })
})


router.put('/:id', (req, res) => {
   console.log(req.body);
   userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(data => { res.json(data) })
      .catch(err => { res.status(400).json(err) })
})


router.delete('/:id', (req, res) => {
   userModel.findByIdAndDelete(req.params.id)
      .then(data => { res.json(data) })
      .catch(err => { res.status(400).json(err) })
})

module.exports = router
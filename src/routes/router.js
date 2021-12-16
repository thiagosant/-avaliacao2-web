const express = require('express')

const route = express.Router()
const UserController = require('../controller/UserController')

route.get('/', (req, res) => {
    console.log(req.body)
    res.json({ message: "Hello from server!" });
})

route.get('/add-user', (req, res) => {
    res.render('add_user')
})

route.get('/update-user', (req, res) => {
    res.render('update_user')
})

//API
route.post('/api/user/createuser', UserController.create)
route.get('/api/user/getusers', UserController.readAll)
route.get('/api/user/getuser/:id/', UserController.readOne)
route.put('/api/user/updateuser/:id/', UserController.update)
route.delete('/api/user/deleteuser/:id/', UserController.delete)



module.exports = route
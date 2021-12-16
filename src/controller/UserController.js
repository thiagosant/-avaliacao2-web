var User = require('../models/User.js')
const connectDB = require('../database/connection.js')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }

    var newUser = new User(req.body.idlogin, req.body.login, req.body.senha, req.body.nome, req.body.sobrenome)
    console.log(typeof parseInt(newUser.idlogin))
    connectDB.query('INSERT INTO login VALUES (?, ?, ?, ?, ?)', [parseInt(newUser.idlogin), newUser.login, newUser.login, newUser.nome, newUser.sobrenome], (err, res) => {
        if (err) throw err;
    });

    res.json("Post successful")
}

exports.readAll = (req, res) => {
    let user
    connectDB.query('SELECT * FROM login', (results, error) => {
        if (error) throw error;

        user = results
    });
    res.send(user);
}

exports.readOne = (req, res) => {

    let user
    connectDB.query('SELECT * FROM login WHERE idlogin = ?', parseInt(req.params.id), (results, error) => {
        if (error) throw error;

        user = results
    });
    res.send(user);
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }

    var newUser = new User(req.body.idlogin, req.body.login, req.body.senha, req.body.nome, req.body.sobrenome)
    connectDB.query('UPDATE login SET idlogin = ?, login = ?, senha = ?, nome = ?, sobrenome = ? WHERE idlogin = ?', [parseInt(req.params.id), newUser.login, newUser.login, newUser.nome, newUser.sobrenome, req.params.id], (err, res) => {
        if (err) throw err;
    });
    res.send("Update successful");
}

exports.delete = (req, res) => {

    console.log(parseInt(req.params.id))
    connectDB.query('DELETE FROM login WHERE idlogin = ?', parseInt(req.params.id), (results, error) => {
        if (error) throw error;
    });
    res.send("Delete successful");
}
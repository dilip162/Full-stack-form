var express = require('express')
var app = express()
const con = require('./routes')
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors());

con.connect((err) => {
    if (err) throw err
    console.log('Database connected')
})

app.get('/getAllUsers', (req, res) => {
    con.query('SELECT * FROM person', (error, result) => {
        if (error) throw error
        res.send(result)
    })
})


app.post('/addUser', (req, res) => {
    const data = req.body
    console.log(req.body);
    con.query('INSERT INTO person SET?', data, (error, result, fields) => {
        if (error) throw error
        res.send(result)
    })
})

app.put('/updateUser/:id', (req, res) => {
    res.send('update api working')
    const data = [req.body.name, req.body.email, req.body.phone, req.body.address, req.body.department, req.body.password, req.params.id]
    con.query('UPDATE person SET name=?,email=?,phone=?,address=?,department=?,password=? Where id=?', data, (error, result, fields) => {

        if (error) throw error
        res.send(result)
    })
})

app.delete('/deleteUser/:id', (req, res) => {
    con.query('DELETE FROM person WHERE id=' + req.params.id, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

app.listen(7000);
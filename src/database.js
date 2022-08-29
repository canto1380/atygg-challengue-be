// import mysql from 'mysql'
import mongoose from 'mongoose'

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user:'root',
//     password:'2203casa',
//     database: 'atygg'
// })

// connection.connect(err => {
//     if(err) throw err
//     console.log('Dtabase connected')
// })

const url= 'mongodb://localhost:27017/atygg'
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Base de datos conectada")
})  
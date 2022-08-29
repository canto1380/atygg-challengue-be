import express from 'express'
import morgan from "morgan";
import cors from "cors";
// import mysql from 'mysql'
import dotenv from "dotenv";
import './database'

import usuariosRoute from './routes/usuarios.route'

const app = express()
//Setting
dotenv.config({ path: '.env' })
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
})

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use('/usuarios', usuariosRoute)


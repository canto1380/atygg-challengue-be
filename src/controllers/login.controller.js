import Usuario from "../models/usuarios";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req, res, next) => {
  try {
    const { email, clave } = req.body;
    const validaUsuario = await Usuario.findOne({ email });
    if (!validaUsuario) {
      res
      .status(400)
      .json({ Mensaje: "El usuario no se encuentra registrado" });
      return
    }
    const validaClave = await bcrypt.compare(clave, validaUsuario.clave);
    if (!validaClave) {
      res.status(400).json({ Mensaje: "La clave ingresada es incorrecta" });
      return
    }
    const generaToken = encrypt(validaUsuario.id);
    const { nombre, apellido } = validaUsuario;
    res.status(200).json({ 
      generaToken,
      usuario: {nombre, apellido, email }
    })
    
  } catch (error) {
    res.status(500).json({ Mensaje: error })
  }

};

const encrypt = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.AUTH_TTL });

module.exports = {
  login,
};

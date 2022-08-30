import Usuario from "../models/usuarios";

const nuevoUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({ Mensaje: "Usuario agregado con exito" });
  } catch (error) {
    res.status(500).json({ Mensaje: error });
  }
};

const listaUsuarios =async(req, res) => {
  try {
    const usuarios = await Usuario.find()
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(500).json({ Mensaje: error })
  }
}

const buscaUsuarioPorID = async(req, res) => {
  try {
    const id = req.params.id
    const usuario = await Usuario.findById(id)
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ Mensaje: error })
  }
}

const actualizaUsuario = async(req, res) => {
  try {
    const id = req.params.id
    const body = req.body
    await Usuario.findByIdAndUpdate(id, body)
    res.status(201).json({ Mensaje: 'Usuario actualizado con exito' })
  } catch (error) {
    res.status(500).json({ Mensaje: error })
  }
}

const eliminaUsuario = async(req, res) => {
  try {
    const id = req.params.id
    await Usuario.findByIdAndDelete(id)
    res.status(201).json({ Mensaje: 'Usuario eliminado con exito' })
  } catch (error) {
    
  }
}

module.exports = {
  nuevoUsuario,
  listaUsuarios,
  buscaUsuarioPorID,
  actualizaUsuario,
  eliminaUsuario,
};

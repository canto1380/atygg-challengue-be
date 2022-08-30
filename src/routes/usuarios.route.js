import {Router} from 'express';
import { nuevoUsuario, listaUsuarios, buscaUsuarioPorID, actualizaUsuario, eliminaUsuario } from '../controllers/usuario.controller'

const router = Router()

router.post('/addUser', nuevoUsuario)
router.get('/', listaUsuarios)
router.get('/:id', buscaUsuarioPorID)
router.put('/:id', actualizaUsuario)
router.delete('/:id', eliminaUsuario)

module.exports = router;

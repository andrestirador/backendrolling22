const { Router } = require("express");
// importamo todas las rutas
const {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  UsuarioDelete,
} = require("../controllers/usuarios.constrollers");

const router = Router();

//GET;
router.get("/", usuariosGet);

// POST
router.post("/", usuarioPost);

//PUT
router.put("/:id", usuarioPut);

// DELETE
router.delete("/:id", UsuarioDelete);

module.exports = router;

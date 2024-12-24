const { Router } = require("express");
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
router.put("/", usuarioPut);

// DELETE
router.delete("/", UsuarioDelete);

module.exports = router;

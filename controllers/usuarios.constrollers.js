// ayuda memoria de los metodos
const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  //const query = req.query;
  const { nombre = " no name ", apikey, limit = 5, page = 1 } = req.query;

  res.json({
    msg: "Mi Primer GET!",
    //query,
    nombre,
    apikey,
    limit,
    page,
  });
};

const usuarioPost = (req = request, res) => {
  const datos = req.body;

  res.status(201).json({
    msg: "Mi Primer POST -iNFO CREADA!",
    datos,
  });
};

const usuarioPut = (req = request, res) => {
  const id = req.params.id;

  res.json({
    msg: "Mi Primer PUT - INFO ACTUALIZADA!",
    id,
  });
};

const UsuarioDelete = (req, res) => {
  const id = req.params.id;
  res.json({
    msg: "Mi Primer - DELETE INFO BORRADA !",
    id,
  });
};

module.exports = {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  UsuarioDelete,
};

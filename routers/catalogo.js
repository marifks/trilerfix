const express = require("express");
const router = express.Router();
const control_catalogo = require("../controles/control_catalogo");



// Ruta para listar todos los catalogos
router.get("/catalogo", control_catalogo.listarCatalogo);

router.get("/catalogo/id/:id", control_catalogo.listarCatalogoId);
router.get("/catalogo/id", control_catalogo.listarCatalogoId);

router.get("/catalogo/nombre/:nombre", control_catalogo.listarCatalogoNombre);
router.get("/catalogo/nombre", control_catalogo.listarCatalogoNombre);

router.get("/catalogo/categoria/:categoria", control_catalogo.listarCatalogoCategoria);
router.get("/catalogo/categoria", control_catalogo.listarCatalogoCategoria);

router.get("/categoria", control_catalogo.listarCategoria);
router.get("/categoria/:categoria", control_catalogo.listarCategoria);

router.get("/catalogo/actor/:actor", control_catalogo.listarCatalogoActor);
router.get("/catalogo/actor", control_catalogo.listarCatalogoActor);

router.get("/catalogo/genero/:genero", control_catalogo.listarCatalogoGenero);
router.get("/catalogo/genero", control_catalogo.listarCatalogoGenero);
module.exports = router;

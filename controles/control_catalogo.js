

const { Op } = require('../node_modules/sequelize');
const Catalogo = require("../models/catalogo");
const {Actor, Reparto} = require("../db/asociaciones");
const {Categoria} = require('../db/asociaciones');
//const {Categoria} = require('../models/categorias');
const {Genero} = require("../db/asociaciones");
const {Catalogo_Genero} = require("../db/asociaciones");
const { db } = require("../db/db");
const Sequelize = require("sequelize");






// Controlador para mostrar la vista de sql

const listarCatalogo = async (req, res)=> {
 
  try {
    const view= await db.query("select * from vista_general") 
  res.send(view)    
  } catch (error) {
    console.error("Error al cargar vista catalogo", error);
    res.status(500).json({ error: "Error al cargar vista catalogo" });
  }
}


// Controlador para buscar por ID

 const listarCatalogoId = async (req, res) => {
  if(!req.params.id){
    const catalogoID = await Catalogo.findAll()
    res.json(catalogoID);
  }else{

   const params_id = req.params.id;
  try {
    const catalogoId = await Catalogo.findByPk(params_id
    ,{
    include: [
      { 
        model: Categoria
      },
      {
        model:Actor
      },
      {
        model:Genero
      }   
    ]
  }
      );
    if (!catalogoId) {
      return res.status(404).json({ error: "id no encontrado" });
    }
    res.json(catalogoId);
  } catch (error) {
    console.error("Error al realizar busqueda por ID", error);
    res.status(500).json({ error: "Error al realizar busqueda por ID" });
  }

 }}

// Controlador para buscar por NOMBRE
 
 const listarCatalogoNombre = async (req, res) => {
  if(!req.params.nombre){
    const catalogoNombre = await Catalogo.findAll()
    res.json(catalogoNombre);
  }else{
  const nombre = req.params.nombre.toLowerCase();
  try {
    const catalogoNombre = await Catalogo.findAll( { where: { titulo:{ [Op.like]: `%${req.params.nombre}%`}} } )
    if (!catalogoNombre) {
      return res.status(404).json({ error: " Error al obtener titulo" });
    }
    res.json(catalogoNombre);
  } catch (error) {
    
    res.status(500).json({ error: "Error al obtener titulo" });
  }

 }}

 const listarCategoria = async (req, res) => {
  if(!req.params.categoria){
    const categoria = await Categoria.findAll()
    res.json(categoria);
  }else{

  try {
   
 
   const categoria = await Categoria.findAll({ where: { categoria:{ [Op.like]: `%${req.params.categoria}%`}} } );
   if (!categoria) {
     return res.status(404).json({ error: "error al buscar por categoria " });
   }
   res.status(201).json(categoria);
 } catch (error) {
   res.status(500).send({error:"error al buscar por categoria"} );
   return;
 }
 }};
 

 
// Controlador para buscar por CATEGORIA

const listarCatalogoCategoria = async (req, res) => {
  if(!req.params.categoria){
    const catalogoCategoria = await Catalogo.findAll()
    res.json(catalogoCategoria);
  }else{
try {
    const catalogoCategoria = await Catalogo.findAll({ 
    include: [
      { 
        model: Categoria,
        where:{
          categoria:{ [Op.like]: `%${req.params.categoria}%`}
      }},
      {
        model:Actor
      },
      {
        model:Genero
      }   
    ]
  });
  if (!catalogoCategoria) {
    return res.status(404).json({ error: "error al buscar por categoria " });
  }
  res.status(201).json(catalogoCategoria);
} catch (error) {
  res.status(500).send({error:"error al buscar por categoria"} );
  return;
}
}};


//listar por actor
 
const listarCatalogoActor = async (req, res) => {
  if(!req.params.actor){
    const catalogoActor = await Catalogo.findAll({ include:{
      model:Actor
    }} )
    res.json(catalogoActor);
  }else{
  
  const queryNombreActor = req.params.actor.toLowerCase();;
  try {
   const catalogoActor = await Catalogo.findAll({
    
      include:{
        model:Actor,
        where:{
          actor:{ [Op.like]: `%${queryNombreActor}%`}
      } 
      }  })

  if (!catalogoActor) {
     return res.status(404).json({ error: "error al buscar por actor " });
   }
   res.status(201).json(catalogoActor);
 } catch (error) {
   res.status(500).send({error:"error al buscar actor"} );
   return;
 }
 }};


 
// Controlador para buscar por NOMBRE
 
const listarCatalogoGenero = async (req, res) => {
  if(!req.params.genero){
    const catalogoGenero = await Genero.findAll()
    res.json(catalogoGenero);
  }else{
  const nombre = req.params.genero.toLowerCase();
  
  try {
    const catalogoNombre = await Genero.findAll( { where: { genero:{ [Op.like]: `%${nombre}%`}} } )
    if (!catalogoNombre) {
      return res.status(404).json({ error: " Error al obtener titulo" });
    }
    res.json(catalogoNombre);
  } catch (error) {
    
    res.status(500).json({ error: "Error al obtener titulo" });
  }

 }}


 

// Exporta los controladores
module.exports = {
  listarCatalogo,
  listarCatalogoId,
  listarCatalogoNombre,
  listarCatalogoCategoria,
  listarCatalogoActor,
  listarCatalogoGenero,

listarCategoria

};

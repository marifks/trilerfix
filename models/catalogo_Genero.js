const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/db");

const Catalogo_Genero=db.define('Catalogo_Genero',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  idTitulo:{
    type:DataTypes.INTEGER,
    defaultValue:0,
  },
  idGenero:{
    type:DataTypes.INTEGER,
    defaultValue:0,
  }
},{
  freezeTableName:true,
    tableName:'Catalogo_Genero'  
});



    module.exports=Catalogo_Genero



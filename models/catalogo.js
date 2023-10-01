const { Sequelize, DataTypes } = require('../node_modules/sequelize');
const { db } = require("../db/db");


const Catalogo= db.define('Catalogo',{
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
  },
  poster:{
      type:DataTypes.STRING,
      defaultValue:''
  },
  titulo:{
      type:DataTypes.STRING,
      defaultValue:''
  },
  categoria:{
      type:DataTypes.BOOLEAN,
      defaultValue:0,
      

  },
  resumen:{
      type:DataTypes.STRING(948),
      defaultValue:''
  },
  temporadas:{
      type:DataTypes.INTEGER,
      defaultValue:0
  },
  trailer:{
      type:DataTypes.STRING,
      defaultValue:''
  }
},{
  freezeTableName:true,
  tableName:'catalogos'
});



  module.exports = Catalogo;

const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/db");



const Reparto= db.define('Reparto',{
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
  },
  idTitulo:{
      type:DataTypes.INTEGER,
      defaultValue:0,

  },
  idActor:{
      type:DataTypes.INTEGER,
      defaultValue:0,
  }
},{
  freezeTableName:true,
  tableName:'reparto'
});


    module.exports=Reparto
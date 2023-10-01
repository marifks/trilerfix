const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/db");


const Genero= db.define('Genero',{
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
  },
  genero:{
      type:DataTypes.STRING,
      defaultValue:''
  }
},{
  freezeTableName:true,
  tableName:'genero',
  name:{
      plural:'Generos',
      singular:'Genero'
  }
});


  module.exports = Genero;

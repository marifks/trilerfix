const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/db");


const Categoria= db.define('Categoria',{
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      
  },
  categoria:{
      type:DataTypes.STRING,
      defaultValue:''
  }
},{
  freezeTableName:true,
  tableName:'categoria',
  name:{
      plural:'Categorias',
      singular: 'Categoria'
  }
});



  module.exports = Categoria;

const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/db");


const Actor= db.define('Actor',{
  id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
  },
  actor:{
      type:DataTypes.STRING,
      defaultValue:''
  }
}, {
  freezeTableName:true,
  tableName:'actores',
  name:{
      plural:'Actores',
      singular:'Actor'
  }
});


  module.exports = Actor;

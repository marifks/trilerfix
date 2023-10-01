const Categoria = require('../models/categorias');
const Actor = require('../models/actor');
const Genero = require('../models/genero');
const Reparto = require('../models/reparto');
// const Catalogo_genero = require('../models/catalogo_Genero');
const Catalogo = require('../models/catalogo');
const Catalogo_Genero = require('../models/catalogo_Genero');


// Configurar relaciones
Catalogo.hasOne(Categoria,{
  foreignKey: 'id',
  sourceKey:'categoria'
});


Catalogo.belongsToMany(Actor,{
  through: Reparto,
  foreignKey: 'idTitulo',
  otherKey:'idActor'
});


Catalogo.belongsToMany(Genero,{
  through: Catalogo_Genero,
  foreignKey: 'idTitulo',
  otherKey: 'idGenero'
});


module.exports = {
    Categoria,
    Reparto,
    Catalogo,
    Catalogo_Genero,
    Genero,
    Actor
};
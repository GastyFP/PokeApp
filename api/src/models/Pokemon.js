const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    hp:{
      type:DataTypes.INTEGER,
      defaultValue: 1
    },
    atk:{
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    def:{
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    speed:{
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    height:{
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    weight:{
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  },{
    timestamps:false
  });
};

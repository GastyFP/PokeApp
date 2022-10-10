const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemons', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
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
    spd:{
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    height:{
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    weight:{
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true      //filter 4 created
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    }
    // funny img CHANGE IT in future deploy to 
    // https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80

  },{
    timestamps:false
  });
};

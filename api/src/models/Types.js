const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('types', {
    id:{
        type: DataTypes.INTEGER
    },
    name:{
      type:DataTypes.STRING
    }
  },{
    timestamps:false
  })
}
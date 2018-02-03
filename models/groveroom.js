module.exports = function (sequelize, Sequelize) {
  var GroveRoom = sequelize.define("GroveRoom",{
    name: {
   type: Sequelize.STRING,
      allowNul: false,
      validate: {
        len:[1, 30]
      }
    },
    song: {
        type: Sequelize.STRING,
        allowNul: false,
    },
    video_id:{
        type: Sequelize.STRING,
        allowNul: false,
    },
    artist: {
        type: Sequelize.STRING,
        allowNul: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNul: false,
    }
  },
  {
    timestamps: false
  }
);

  GroveRoom.associate = function(models){

    GroveRoom.belongsTo(models.User, { as: "Creator",
      foreignKey: "creator_id"})

     GroveRoom.hasMany(models.Messages, {
       onDelete: "cascade"

  })
     GroveRoom.belongsToMany(models.User,{
        through: "ThroughTable",

  })

};

  return  GroveRoom;
}

module.exports = function (sequelize, Sequelize) {
  var Chatroom = sequelize.define("Chatroom",{
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
    artist: {
   type: Sequelize.STRING,
      allowNul: false,
    }
  },
  {
    timestamps: false
  }
);

  Chatroom.associate = function(models){

  //   Chatroom.belongsTo(models.User, {
  //     foreignKey: {
  //     allowNull: false
  //   }
  //
  // });
  Chatroom.hasMany(models.Messages, {
      onDelete: "cascade"

  })
  Chatroom.belongsToMany(models.User,{
      through: "ThroughTable",
  
  })

};

  return  Chatroom;
}

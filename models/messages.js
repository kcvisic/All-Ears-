module.exports = function (sequelize, Sequelize) {
    var Messages = sequelize.define("Messages", {

      name: {
       type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      }
    },
    {
        timestamps: false
    }
);


  Messages.associate = function(models){
    Messages.belongsTo(models.User,{
    foreignKey: {
      allowNull: false
    }
  });

  Messages.belongsTo(models.Chatroom,{
    foreignKey: {
      allowNull: false
    }
  });
};
  return Messages;
}

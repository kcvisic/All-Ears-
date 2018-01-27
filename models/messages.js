module.exports = function (sequelize, Sequelize) {
    var Messages = sequelize.define("Messages", {

      message: {
       type: Sequelize.TEXT,
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

  Messages.belongsTo(models.GroveRoom,{
    foreignKey: {
      allowNull: false
    }
  });
};
  return Messages;
}

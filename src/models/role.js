"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            this.belongsToMany(models.User, {
                through: "USER_ROLES",
            });
        }
    }
    Role.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Role",
        },
    );
    return Role;
};

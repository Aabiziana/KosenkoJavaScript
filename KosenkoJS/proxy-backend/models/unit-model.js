const Sequelize = require('sequelize');
const sequelize = require('../connection');

const UnitModel = sequelize.define(
    'units',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = UnitModel;


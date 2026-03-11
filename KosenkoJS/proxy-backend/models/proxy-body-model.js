const Sequelize = require('sequelize');
const sequelize = require('../connection');

const ProxyBodyModel = sequelize.define(
    'proxybody',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        count: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
        unit: {
            type: Sequelize.STRING(8),
            allowNull: false,
        },
        proxyHeaderId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        productId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = ProxyBodyModel;
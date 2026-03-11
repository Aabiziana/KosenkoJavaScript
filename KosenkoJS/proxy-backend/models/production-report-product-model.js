const Sequelize = require('sequelize');
const sequelize = require('../connection');

const ProductionReportProductModel = sequelize.define(
    'productionreportproduct',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productionReportHeaderId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        productName: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        productCode: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        unitCode: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        unit: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        quantityPlace: {
            type: Sequelize.DECIMAL(10, 3),
            allowNull: true,
        },
        quantityPlaces: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        grossWeight: {
            type: Sequelize.DECIMAL(10, 3),
            allowNull: true,
        },
        netWeight: {
            type: Sequelize.DECIMAL(10, 3),
            allowNull: true,
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true,
        },
        totalAmount: {
            type: Sequelize.DECIMAL(12, 2),
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = ProductionReportProductModel;

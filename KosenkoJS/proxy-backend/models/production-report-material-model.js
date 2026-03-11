const Sequelize = require('sequelize');
const sequelize = require('../connection');

const ProductionReportMaterialModel = sequelize.define(
    'productionreportmaterial',
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
        accountCode: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        accountSubcode: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        materialName: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        nomenclatureCode: {
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
        requested: {
            type: Sequelize.DECIMAL(10, 3),
            allowNull: true,
        },
        issued: {
            type: Sequelize.DECIMAL(10, 3),
            allowNull: true,
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true,
        },
        totalAmountNoVAT: {
            type: Sequelize.DECIMAL(12, 2),
            allowNull: true,
        },
        warehouseCardNumber: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = ProductionReportMaterialModel;

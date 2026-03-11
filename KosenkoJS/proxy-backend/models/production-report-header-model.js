const Sequelize = require('sequelize');
const sequelize = require('../connection');

const ProductionReportHeaderModel = sequelize.define(
    'productionreportheader',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        reportDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        organizationId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        okudCode: {
            type: Sequelize.STRING(20),
            allowNull: true,
            defaultValue: '0335018',
        },
        okpoCode: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        okdpCode: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        operationType: {
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        shift: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        materialResponsibleId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: true,
        },
        controllerId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: true,
        },
        recipientId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: true,
        },
        notes: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = ProductionReportHeaderModel;

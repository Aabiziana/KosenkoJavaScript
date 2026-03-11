const Sequelize = require('sequelize');
const sequelize = require('../connection');

const ProxyHeaderModel = sequelize.define(
    'proxyheader',
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
        dischargeDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        individualId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        organizationId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: true,
            defaultValue: 'active',
        },
        issuedBy: {
            type: Sequelize.STRING(255),
            allowNull: true,
        },
        notes: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        passportNumber: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = ProxyHeaderModel;
const ProductionReportHeaderModel = require('../models/production-report-header-model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class ProductionReportHeaderService {
    /** получить все записи из таблицы "productionreportheaders" */
    async getAllRecords(filters = {}) {
        const where = {};
        if (filters.organizationId) {
            where.organizationId = filters.organizationId;
        }
        if (filters.shift) {
            where.shift = filters.shift;
        }
        const conditions = [];
        if (Object.keys(where).length > 0) {
            conditions.push(where);
        }
        if (filters.search) {
            conditions.push(
                Sequelize.where(
                    Sequelize.cast(Sequelize.col('number'), 'TEXT'),
                    Op.like,
                    `%${filters.search}%`
                )
            );
        }
        const finalWhere = conditions.length > 0 ? Sequelize.and(...conditions) : {};
        const list = await ProductionReportHeaderModel.findAll({ where: finalWhere });
        return list;
    }

    /** получить одну запись по id из таблицы "productionreportheaders" */
    async getOneRecord(recordId) {
        const record = await ProductionReportHeaderModel.findOne({ where: {id: recordId } });
        return record;
    }

    /** создать запись в таблице "productionreportheaders" */
    async createRecord(payload) {
        const data = await ProductionReportHeaderModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "productionreportheaders" */
    async updateRecord(payload) {
        let record = await ProductionReportHeaderModel.findOne({ where: { id: payload.id } });
        record.number = payload?.number !== undefined ? payload.number : record?.number;
        record.reportDate = payload?.reportDate !== undefined ? payload.reportDate : record?.reportDate;
        record.organizationId = payload?.organizationId !== undefined ? payload.organizationId : record?.organizationId;
        record.okudCode = payload?.okudCode !== undefined ? payload.okudCode : record?.okudCode;
        record.okpoCode = payload?.okpoCode !== undefined ? payload.okpoCode : record?.okpoCode;
        record.okdpCode = payload?.okdpCode !== undefined ? payload.okdpCode : record?.okdpCode;
        record.operationType = payload?.operationType !== undefined ? payload.operationType : record?.operationType;
        record.shift = payload?.shift !== undefined ? payload.shift : record?.shift;
        record.materialResponsibleId = payload?.materialResponsibleId !== undefined ? payload.materialResponsibleId : record?.materialResponsibleId;
        record.controllerId = payload?.controllerId !== undefined ? payload.controllerId : record?.controllerId;
        record.recipientId = payload?.recipientId !== undefined ? payload.recipientId : record?.recipientId;
        record.notes = payload?.notes !== undefined ? payload.notes : record?.notes;
        
        return await record.save();
    }

    /** удалить запись из таблицы "productionreportheaders" */
    async removeRecord(recordId) {
        const record = await ProductionReportHeaderModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new ProductionReportHeaderService();

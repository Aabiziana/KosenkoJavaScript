const ProxyHeaderModel = require('../models/proxy-header-model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class ProxyHeaderService {
    /** получить все записи из таблицы "proxyheaders" */
    async getAllRecords(filters = {}) {
        const where = {};
        if (filters.status) {
            where.status = filters.status;
        }
        if (filters.organizationId) {
            where.organizationId = filters.organizationId;
        }
        if (filters.individualId) {
            where.individualId = filters.individualId;
        }
        const conditions = [];
        if (Object.keys(where).length > 0) {
            conditions.push(where);
        }
        if (filters.search) {
            // Приводим число к строке для поиска через LIKE
            conditions.push(
                Sequelize.where(
                    Sequelize.cast(Sequelize.col('number'), 'TEXT'),
                    Op.like,
                    `%${filters.search}%`
                )
            );
        }
        const finalWhere = conditions.length > 0 ? Sequelize.and(...conditions) : {};
        const list = await ProxyHeaderModel.findAll({ where: finalWhere });
        return list;
    }

    /** получить одну запись по id из таблицы "proxyheaders" */
    async getOneRecord(recordId) {
        const record = await ProxyHeaderModel.findOne({ where: {id: recordId } });
        return record;
    }

    /** создать запись в таблице "proxyheaders" */
    async createRecord(payload) {
        const data = await ProxyHeaderModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "proxyheaders" */
    async updateRecord(payload) {
        let record = await ProxyHeaderModel.findOne({ where: { id: payload.id } });
        record.number = payload?.number !== undefined ? payload.number : record?.number;
        record.dischargeDate = payload?.dischargeDate !== undefined ? payload.dischargeDate : record?.dischargeDate;
        record.endDate = payload?.endDate !== undefined ? payload.endDate : record?.endDate;
        record.individualId = payload?.individualId !== undefined ? payload.individualId : record?.individualId;
        record.organizationId = payload?.organizationId !== undefined ? payload.organizationId : record?.organizationId;
        record.status = payload?.status !== undefined ? payload.status : record?.status;
        record.issuedBy = payload?.issuedBy !== undefined ? payload.issuedBy : record?.issuedBy;
        record.notes = payload?.notes !== undefined ? payload.notes : record?.notes;
        record.passportNumber = payload?.passportNumber !== undefined ? payload.passportNumber : record?.passportNumber;
        
        // Автоматическая проверка статуса по дате окончания
        if (record.endDate && new Date(record.endDate) < new Date()) {
            if (record.status === 'active') {
                record.status = 'expired';
            }
        }
        
        return await record.save();
    }

    /** удалить запись из таблицы "proxyheaders" */
    async removeRecord(recordId) {
        const record = await ProxyHeaderModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new ProxyHeaderService();
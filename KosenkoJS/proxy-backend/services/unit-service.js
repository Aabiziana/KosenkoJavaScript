const UnitModel = require('../models/unit-model');

class UnitService {
    /** получить все записи из таблицы "units" */
    async getAllRecords() {
        const list = await UnitModel.findAll();
        return list;
    }

    /** создать запись в таблице "units" */
    async createRecord(payload) {
        const data = await UnitModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "units" */
    async updateRecord(payload) {
        let record = await UnitModel.findOne({ where: { id: payload.id } });
        record.title = payload?.title !== undefined ? payload.title : record?.title;
        return await record.save();
    }

    /** удалить запись из таблицы "units" */
    async removeRecord(recordId) {
        const record = await UnitModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new UnitService();


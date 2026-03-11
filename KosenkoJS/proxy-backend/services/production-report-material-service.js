const ProductionReportMaterialModel = require('../models/production-report-material-model');

class ProductionReportMaterialService {
    /** получить все записи из таблицы "productionreportmaterials" по productionReportHeaderId */
    async getAllHeadersRecords(headerId) {
        const list = await ProductionReportMaterialModel.findAll({ where: { productionReportHeaderId: headerId } });
        return list;
    }

    /** создать запись в таблице "productionreportmaterials" */
    async createRecord(payload) {
        const data = await ProductionReportMaterialModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "productionreportmaterials" */
    async updateRecord(payload) {
        let record = await ProductionReportMaterialModel.findOne({ where: { id: payload.id } });
        record.productionReportHeaderId = payload?.productionReportHeaderId !== undefined ? payload.productionReportHeaderId : record.productionReportHeaderId;
        record.accountCode = payload?.accountCode !== undefined ? payload.accountCode : record.accountCode;
        record.accountSubcode = payload?.accountSubcode !== undefined ? payload.accountSubcode : record.accountSubcode;
        record.materialName = payload?.materialName !== undefined ? payload.materialName : record.materialName;
        record.nomenclatureCode = payload?.nomenclatureCode !== undefined ? payload.nomenclatureCode : record.nomenclatureCode;
        record.unitCode = payload?.unitCode !== undefined ? payload.unitCode : record.unitCode;
        record.unit = payload?.unit !== undefined ? payload.unit : record.unit;
        record.requested = payload?.requested !== undefined ? payload.requested : record.requested;
        record.issued = payload?.issued !== undefined ? payload.issued : record.issued;
        record.price = payload?.price !== undefined ? payload.price : record.price;
        record.totalAmountNoVAT = payload?.totalAmountNoVAT !== undefined ? payload.totalAmountNoVAT : record.totalAmountNoVAT;
        record.warehouseCardNumber = payload?.warehouseCardNumber !== undefined ? payload.warehouseCardNumber : record.warehouseCardNumber;
        return await record.save();
    }

    /** удалить запись из таблицы "productionreportmaterials" */
    async removeRecord(recordId) {
        const record = await ProductionReportMaterialModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new ProductionReportMaterialService();

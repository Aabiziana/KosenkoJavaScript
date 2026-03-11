const ProductionReportProductModel = require('../models/production-report-product-model');

class ProductionReportProductService {
    /** получить все записи из таблицы "productionreportproducts" по productionReportHeaderId */
    async getAllHeadersRecords(headerId) {
        const list = await ProductionReportProductModel.findAll({ where: { productionReportHeaderId: headerId } });
        return list;
    }

    /** создать запись в таблице "productionreportproducts" */
    async createRecord(payload) {
        const data = await ProductionReportProductModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "productionreportproducts" */
    async updateRecord(payload) {
        let record = await ProductionReportProductModel.findOne({ where: { id: payload.id } });
        record.productionReportHeaderId = payload?.productionReportHeaderId !== undefined ? payload.productionReportHeaderId : record.productionReportHeaderId;
        record.productName = payload?.productName !== undefined ? payload.productName : record.productName;
        record.productCode = payload?.productCode !== undefined ? payload.productCode : record.productCode;
        record.unitCode = payload?.unitCode !== undefined ? payload.unitCode : record.unitCode;
        record.unit = payload?.unit !== undefined ? payload.unit : record.unit;
        record.quantityPlace = payload?.quantityPlace !== undefined ? payload.quantityPlace : record.quantityPlace;
        record.quantityPlaces = payload?.quantityPlaces !== undefined ? payload.quantityPlaces : record.quantityPlaces;
        record.grossWeight = payload?.grossWeight !== undefined ? payload.grossWeight : record.grossWeight;
        record.netWeight = payload?.netWeight !== undefined ? payload.netWeight : record.netWeight;
        record.price = payload?.price !== undefined ? payload.price : record.price;
        record.totalAmount = payload?.totalAmount !== undefined ? payload.totalAmount : record.totalAmount;
        return await record.save();
    }

    /** удалить запись из таблицы "productionreportproducts" */
    async removeRecord(recordId) {
        const record = await ProductionReportProductModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new ProductionReportProductService();

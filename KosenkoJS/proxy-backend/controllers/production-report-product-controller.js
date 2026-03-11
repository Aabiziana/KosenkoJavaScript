const ProductionReportProductService = require('../services/production-report-product-service');

class ProductionReportProductController {
    async getAllHeadersRecords(req, res) {
        try {
            const headerId = req.params.headerId;
            const list = await ProductionReportProductService.getAllHeadersRecords(headerId);
            return res
                .status(200)
                .json(list);
        } catch (e) {
            return res
                .status(500)
                .json({ message: e.message });
        }
    }

    async createRecord(req, res) {
        try {
            const record = await ProductionReportProductService.createRecord(req.body);
            return res
                .status(200)
                .json(record);
        } catch (e) {
            return res
                .status(500)
                .json(e);
        }
    }

    async updateRecord(req, res) {
        try {
            const record = await ProductionReportProductService.updateRecord(req.body);
            return res
                .status(200)
                .json(record);
        } catch (e) {
            return res
                .status(500)
                .json(e);
        }
    }

    async removeRecord(req, res) {
        try {
            const recordId = req.params.id;
            const record = await ProductionReportProductService.removeRecord(recordId);
            return res
                .status(200)
                .json(record);
        } catch (e) {
            return res
                .status(500)
                .json({ message: e.message });
        }
    }
}

module.exports = new ProductionReportProductController()

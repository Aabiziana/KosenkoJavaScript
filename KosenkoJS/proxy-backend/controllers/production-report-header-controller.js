const ProductionReportHeaderService = require('../services/production-report-header-service');

class ProductionReportHeaderController {
    async getAllRecords(req, res) {
        try {
            const filters = {
                organizationId: req.query.organizationId,
                shift: req.query.shift,
                search: req.query.search,
            };
            const list = await ProductionReportHeaderService.getAllRecords(filters);
            return res
                .status(200)
                .json(list);
        } catch (e) {
            return res
                .status(500)
                .json({ message: e.message });
        }
    }

    async getOneRecord(req, res) {
        try {
            const recordId = req.params.id;
            const record = await ProductionReportHeaderService.getOneRecord(recordId);
            return res
                .status(200)
                .json(record);
        } catch (e) {
            return res
                .status(500)
                .json(e);
        }
    }

    async createRecord(req, res) {
        try {
            const record = await ProductionReportHeaderService.createRecord(req.body);
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
            const record = await ProductionReportHeaderService.updateRecord(req.body);
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
            const record = await ProductionReportHeaderService.removeRecord(recordId);
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

module.exports = new ProductionReportHeaderController()

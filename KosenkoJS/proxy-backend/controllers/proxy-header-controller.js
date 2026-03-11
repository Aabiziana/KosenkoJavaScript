const ProxyHeaderService = require('../services/proxy-header-service');

class ProxyHeaderController {
    async getAllRecords(req, res) {
        try {
            const filters = {
                status: req.query.status,
                organizationId: req.query.organizationId,
                individualId: req.query.individualId,
                search: req.query.search,
            };
            const list = await ProxyHeaderService.getAllRecords(filters);
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
            const record = await ProxyHeaderService.getOneRecord(recordId);
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
            const record = await ProxyHeaderService.createRecord(req.body);
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
            const record = await ProxyHeaderService.updateRecord(req.body);
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
            const record = await ProxyHeaderService.removeRecord(recordId);
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

module.exports = new ProxyHeaderController()
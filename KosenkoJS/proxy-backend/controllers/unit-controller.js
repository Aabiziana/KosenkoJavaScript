const UnitService = require('../services/unit-service');

class UnitController {
    async getAllRecords(req, res) {
        try {
            const list = await UnitService.getAllRecords();
            res.json(list);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async createRecord(req, res) {
        try {
            const data = await UnitService.createRecord(req.body);
            res.json(data);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async updateRecord(req, res) {
        try {
            const data = await UnitService.updateRecord(req.body);
            res.json(data);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    async removeRecord(req, res) {
        try {
            await UnitService.removeRecord(req.params.id);
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}

module.exports = new UnitController();


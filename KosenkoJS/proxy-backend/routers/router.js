const Router = require("express").Router;
const ProductController = require('../controllers/product-controller');
const UnitController = require('../controllers/unit-controller');
const OrgatizationController = require('../controllers/organization-controller');
const IndividualController = require('../controllers/individual-controller');
const ProxyBodyController = require('../controllers/proxy-body-controller');
const ProxyHeaderController = require('../controllers/proxy-header-controller');
const ProductionReportHeaderController = require('../controllers/production-report-header-controller');
const ProductionReportProductController = require('../controllers/production-report-product-controller');
const ProductionReportMaterialController = require('../controllers/production-report-material-controller');

const router = new Router();

router.get
    (
        '/products',
        ProductController.getAllRecords,
    );

router.post
    (
        '/products',
        ProductController.createRecord,
    );

router.put
    (
        '/products',
        ProductController.updateRecord,
    );

router.delete
    (
        '/products/:id',
        ProductController.removeRecord,
    );

router.get
    (
        '/units',
        UnitController.getAllRecords,
    );

router.post
    (
        '/units',
        UnitController.createRecord,
    );

router.put
    (
        '/units',
        UnitController.updateRecord,
    );

router.delete
    (
        '/units/:id',
        UnitController.removeRecord,
    );

router.get
    (
        '/organizations',
        OrgatizationController.getAllRecords,
    );

router.post
    (
        '/organizations',
        OrgatizationController.createRecord,
    );

router.put
    (
        '/organizations',
        OrgatizationController.updateRecord,
    );

router.delete
    (
        '/organizations/:id',
        OrgatizationController.removeRecord,
    );

router.get
    (
        '/individuals',
        IndividualController.getAllRecords,
    );

router.post
    (
        '/individuals',
        IndividualController.createRecord,
    );

router.put
    (
        '/individuals',
        IndividualController.updateRecord,
    );

router.delete
    (
        '/individuals/:id',
        IndividualController.removeRecord,
    );

router.get
    (
        '/proxy-bodies/:headerId',
        ProxyBodyController.getAllHeadersRecords,
    );

router.post
    (
        '/proxy-bodies',
        ProxyBodyController.createRecord,
    );

router.put
    (
        '/proxy-bodies',
        ProxyBodyController.updateRecord,
    );

router.delete
    (
        '/proxy-bodies/:id',
        ProxyBodyController.removeRecord,
    );

router.get
    (
        '/proxy-headers',
        ProxyHeaderController.getAllRecords,
    );

router.get
    (
        '/proxy-headers/:id',
        ProxyHeaderController.getOneRecord,
    );

router.post
    (
        '/proxy-headers',
        ProxyHeaderController.createRecord,
    );

router.put
    (
        '/proxy-headers',
        ProxyHeaderController.updateRecord,
    );

router.delete
    (
        '/proxy-headers/:id',
        ProxyHeaderController.removeRecord,
    );

// Production Report Headers
router.get
    (
        '/production-report-headers',
        ProductionReportHeaderController.getAllRecords,
    );

router.get
    (
        '/production-report-headers/:id',
        ProductionReportHeaderController.getOneRecord,
    );

router.post
    (
        '/production-report-headers',
        ProductionReportHeaderController.createRecord,
    );

router.put
    (
        '/production-report-headers',
        ProductionReportHeaderController.updateRecord,
    );

router.delete
    (
        '/production-report-headers/:id',
        ProductionReportHeaderController.removeRecord,
    );

// Production Report Products
router.get
    (
        '/production-report-products/:headerId',
        ProductionReportProductController.getAllHeadersRecords,
    );

router.post
    (
        '/production-report-products',
        ProductionReportProductController.createRecord,
    );

router.put
    (
        '/production-report-products',
        ProductionReportProductController.updateRecord,
    );

router.delete
    (
        '/production-report-products/:id',
        ProductionReportProductController.removeRecord,
    );

// Production Report Materials
router.get
    (
        '/production-report-materials/:headerId',
        ProductionReportMaterialController.getAllHeadersRecords,
    );

router.post
    (
        '/production-report-materials',
        ProductionReportMaterialController.createRecord,
    );

router.put
    (
        '/production-report-materials',
        ProductionReportMaterialController.updateRecord,
    );

router.delete
    (
        '/production-report-materials/:id',
        ProductionReportMaterialController.removeRecord,
    );

module.exports = router;
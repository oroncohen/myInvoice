'use strict';
module.exports = function(app) {
    var invoiceList = require('../controllers/invoiceListController');


    app.route('/invoices')
        .get(invoiceList.list_all_invoices)
        .post(invoiceList.create_a_invoice);


    app.route('/tasks/:taskId')
        .get(invoiceList.read_a_invoice)
        .put(invoiceList.update_a_invoice)
        .delete(invoiceList.delete_a_invoice);
};

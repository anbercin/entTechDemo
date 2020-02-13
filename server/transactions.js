"use strict";

let db = require('./pghelper');

let findAll = (req, res, next) => {
    let name = req.query.name;
    let params = [];
    let sql;
    sql = `SELECT id, pricingnumber AS pricing_number, transactionid AS transaction_id, ticketnumber AS ticket_number,trader, price, quantity, asofdate AS as_of_date FROM transaction_webapi`;

    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set("X-Total-Count", 1);
    db.query(sql, params)
        .then(result => res.json(result))
        .catch(next);
};
exports.findAll = findAll;

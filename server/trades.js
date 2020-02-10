"use strict";

let db = require('./pghelper');

let findAll = (req, res, next) => {
    let name = req.query.name;
    let params = [];
    let sql;
    sql = `SELECT id, ticker, price, amount,account, broker, trade_date FROM trades`;

    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set("X-Total-Count", 1);
    db.query(sql, params)
        .then(result => res.json(result))
        .catch(next);
};
exports.findAll = findAll;

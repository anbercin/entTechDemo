drop table IF EXISTS trades;

CREATE TABLE IF NOT EXISTS trades (
    id              SERIAL PRIMARY KEY,
    ticker          TEXT,
    price          NUMERIC,
    amount           NUMERIC,
    account         TEXT,
    broker         TEXT,
    trade_date     TIMESTAMP default current_timestamp
  );

INSERT INTO trades (ticker, price, amount, account, broker) VALUES
('Sony JP', 546, 100, 'NAS', 'BB'),
('Amazon US', 22, 1000, 'NAS', 'TEST'),
('Toyota JP', 134, 5000, 'NAS', 'TEST2'),
('IBM US', 12, 200, 'TEST', 'BB');

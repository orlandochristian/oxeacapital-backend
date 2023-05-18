-- CREATE DATABASE oxeacapital;

-- \c oxeacapital;

--   CREATE TABLE clients (
--   client_id SERIAL PRIMARY KEY,
--   first_name TEXT NOT NULL,
--   last_name TEXT NOT NULL,
--   direccion TEXT NOT NULL, 
--   telefono  TEXT NOT NULL,
--   email TEXT NOT NULL,
--   ss TEXT,
--   dob TEXT,
--   lic_number TEXT
--  );


--  CREATE TABLE loans (
--     loan_id SERIAL PRIMARY KEY,
--     totalamount NUMERIC(8,2) NOT NULL,
--     amountdue NUMERIC(8,2) NOT NULL,
--     interestrate INT check (interestrate >= 0) default 0,
--     startdate TEXT NOT NULL,
--     appfee NUMERIC(8,2) check (appfee >= 0) default 0,
--     active BOOLEAN,
--     client_id INT,
--     CONSTRAINT fk_clients FOREIGN KEY (client_id) REFERENCES clients(client_id) ON DELETE CASCADE
--  );

--  CREATE TABLE payments (
--     payment_id SERIAL PRIMARY KEY,
--     paymentmount NUMERIC(8,2) NOT NULL,
--     interestamount NUMERIC(8,2) NOT NULL,
--     paymentdate TEXT NOT NULL,
--     loan_id INT,
--     CONSTRAINT fk_loans FOREIGN KEY(loan_id) REFERENCES loans(loan_id) ON DELETE CASCADE
--  )


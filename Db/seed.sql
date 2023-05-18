
-- \c oxeacapital;


-- INSERT INTO clients (first_name,last_name,direccion,telefono,email,ss,dob,lic_number) VALUES 
-- ('Diego','Maradona','Segurola 264 Bs As','(011)4575419','dmaradona@gmail.com','210-20-5643','1962-10-30','M2345678'),
-- ('Lionel','Messi','Main st 264 Barcelona','(011)4577652','lmessi@gmail.com','110-12-5233','1985-07-20','M3456789'),
-- ('Alexis','McAlister','2nd st 367 London','(011)4572309','amcalister@gmail.com','456-11-9830','1986-05-10','M9874002'),
-- ('Emanuel','Ginobili','Croos rd 115 Dallas TX','(011)2985539','eginobili@gmail.com','387-86-5041','1979-01-27','M9984531');


--     totalamount NUMERIC(8,2) NOT NULL,
--     amountdue NUMERIC(8,2) NOT NULL,
--     interestrate INT check (interestrate >= 0) default 0,
--     startdate TEXT NOT NULL,
--     appfee NUMERIC(8,2) check (appfee >= 0) default 0,
--     active BOOLEAN,
--     client_id INT,
insert into loans (totalamount,interestrate,startdate,appfee,active,client_id)
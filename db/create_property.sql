insert into sim2_properties
(users_id, property_name, property_desc, address, city, state, zip, img, loan_amt, mortgage, rec_rent, des_rent)
values 
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);

select * from sim2_properties 
where users_id = $1;
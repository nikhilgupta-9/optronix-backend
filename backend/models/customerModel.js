const pool = require('../config/db');


const Customer = {
    async create(customerData){
        // insert data of new customer 
        const [result] = await pool.query(
          `INSERT INTO customers (fullName, email, phone, gender, dob, address, password, latitude, longitude, deviceInfo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
        customerData.fullName,
        customerData.email,
        customerData.phone,
        customerData.gender,
        customerData.dob,
        customerData.address,
        customerData.password,
        customerData.latitude,
        customerData.longitude,
        customerData.deviceInfo
        ]
        );
    return result.insertId;  
    },
    
    // it is use for fetch data of existing customer (find by phone number)
    async findByPhone(phone){
        const [row] = await pool.query(
            'SELECT * FROM `customers` where `phone` = ?',
            [phone]
        );
        return row[0];
    }
}

module.exports = Customer;
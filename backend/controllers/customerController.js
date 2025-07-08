const Customer = require('../models/customerModel');

// controller for create or register new customer  
exports.registerCustomer = async (req, res) =>{
  try{
   const customerId = await Customer.create(req.body);
   res.status(201).json({
      status: 'success',
      data:{
         customerId
      }
   });
  } catch(err){
   res.status(400).json({
      status: 'fail',
      message: err.message
   });
  }
};

// find existing customer by their phone number 
exports.getCustomerByPhone = async (req, res) => {
   try{
      const customer = await Customer.findByPhone(req.params.phone);
         if(!customer){
            return res.status(404).json({
               status: 'fail',
               message: 'Customer no found !'
            });
         }
    
         // it is user for delete customer password if exisitng customer fetched 
         delete customer.password;

         res.status(200).json({
            status: 'success',
            data:{
               customer
            }
         });
   } catch(err){
       res.status(400).json({
         status:'fail',
         message: err.message
       });
   }
};
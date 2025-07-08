const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes 
app.use('/api/customers', customerRoutes);

// error handling middleware 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'errors',
        message: 'Something went wrong!'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
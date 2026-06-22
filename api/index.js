const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Vinzz AI - Free Fire API aktif',
    package: 'com.dts.freefireth',
    endpoints: ['/ff/info', '/ff/redeem', '/ff/status', '/ff/custom']
  });
});

module.exports = app;

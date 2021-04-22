const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const equipmentsRoute = require('./routes/equipmentsRoute');
app.get('/equipments', equipmentsRoute);

const materialsRoute = require('./routes/materialsRoute');
app.get('/produts', materialsRoute);

const purchase_ordersRoute = require('./routes/purchase_ordersRoute');
app.get('/purchase_orders', purchase_ordersRoute);

const sales_ordersRoute = require('./routes/sales_ordersRoute');
app.get('/sales_orders', sales_ordersRoute);

const workforceRoute = require('./routes/workforceRoute');
app.get('/workforce', workforceRoute);

module.exports = app;
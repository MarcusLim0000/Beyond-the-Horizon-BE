const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database');
// const uploadRoute = require('./controllers/uploadController')

const app = express();
app.use(cors());
app.use(express.json());

//middleware here for checking token
app.use(require('./config/checkToken'))

//api use here
app.use('/api/users', require('./routes/user.routes'));

//protected routes here
const ensureLoggedIn = require('./config/ensureLoggedIn')
const flightRoutes = require('./routes/form.routes')
app.use('/api/flight', ensureLoggedIn, flightRoutes)
//const holiday = require('./routes/holiday.routes')

const PORT = process.env.PORT;

app.listen(PORT, function() {
    console.log(`Backend started on port ${PORT}`)
});
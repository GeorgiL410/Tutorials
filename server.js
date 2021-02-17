const app = require('express')();
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { PORT } = require('./config/server')

require('./config/mongoose');
require('./config/express')(app);


app.use(routes);
app.use(errorHandler);
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));


const app = require('express')();
const { PORT } = require('./config/server')
require('./config/mongoose');



app.get('/', (req, res) => {
res.send('ok');
})

app.listen(PORT, console.log(`Server is running on port ${PORT}...`));


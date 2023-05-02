const dotenv = require('dotenv');
const app = require('./app');
const database=require('./mongo');

dotenv.config({ path: './config.env' });

database.databaseConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

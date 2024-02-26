const app = require('./app');
require('dotenv').config();
const { createConnection } = require('typeorm');

async function connectToDatabase() {
  try {
      await createConnection({
          type: 'mysql',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT, 10),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          entities: [
              // Add your entity classes here
          ],
          synchronize: true, // Set to false in production
      });
      console.log('Connected to the database');
  } catch (error) {
      console.error('Error connecting to the database:', error);
  }
}
connectToDatabase();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} and can be accessed http://localhost:${PORT}`);
});
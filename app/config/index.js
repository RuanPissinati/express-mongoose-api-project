require('dotenv').config();

module.exports = {
  mongo: { uri: process.env.MONGO_URI },
  app: { url: process.env.APP_URL, port: process.env.PORT }
}
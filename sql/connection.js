require('dotenv').config()
const mysql2 = require('mysql2')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql2 connection...')
      this.pool = mysql2.createPool({
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DEFAULT_SCHEMA
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;

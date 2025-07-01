const db = require('./db');

async function init() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS test_results (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      answers JSONB,
      completed_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS payments (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      stripe_payment_id TEXT,
      status TEXT,
      paid_at TIMESTAMP DEFAULT NOW()
    );
  `);

  console.log("Database initialized");
  process.exit();
}

init();

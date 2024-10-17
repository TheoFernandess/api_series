import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGSERIES, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGSERIES,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };
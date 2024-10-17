import { sql } from './db.js'

sql`
  CREATE TABLE series (
      id text PRIMARY KEY,
      nome character varying(255),
      plataforma character varying(255),
      sinopse character varying(255)
  );
`.then(() => {
  console.log('Tabela criada!');
})
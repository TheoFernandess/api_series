import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabaseSeries {
  async listSeries() {
    const series = await sql`select * from series`;
    return series;
  }

  async createSeries(serie) {
    const id = randomUUID();
    console.log('id', id);
    const nome = serie.nome;
    const plataforma = serie.plataforma;
    const sinopse = serie.sinopse;

    await sql`insert into series (id, nome, plataforma, sinopse)
    values (${id}, ${nome}, ${plataforma}, ${sinopse})`
  }

  async updateSeries(id, serie) {
    const nome = serie.nome;
    const plataforma = serie.plataforma;
    const sinopse = serie.sinopse;

    await sql`update series set 
        nome = ${nome},
        plataforma = ${plataforma},
        sinopse = ${sinopse}
        where id = ${id}
    `;
  }

  async deleteSeries(id) {
    await sql`delete from series where id = ${id}`
  }
}

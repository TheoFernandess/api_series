
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabaseSeries } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabaseSeries;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/series', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createSerie(body);
    return reply.status(201).send();
})


// REATE
server.get('/series', async () => {
    const series = await databasePostgres.listSeries();
    return series;
});

// UPDATE
server.put('/series/:id', async (request, reply) => {
    const serieID = request.params.id;
    const body = request.body;
    await databasePostgres.updateSerie(serieID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/series/:id', async (request, reply) => {
    const serieID = request.params.id;
    await databasePostgres.deleteSerie(serieID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});

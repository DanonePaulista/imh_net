const { findUsers } = require("../services/user");

async function userRoutes(fastify, options){
    fastify.get('/users', async (request, reply) => {
        const users = await findUsers();
        reply.send(users);
    })

}

module.exports = userRoutes;
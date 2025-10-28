const { createUser, findUsers } = require("../services/user");

async function userRoutes(fastify, options){
    fastify.get('/users', async (request, reply) => {
        const users = await findUsers();
        reply.send(users);
    });

    fastify.post('/users', async (request, reply) => {
        try {
            const newUser = await createUser(request.body);
            reply.status(201).send(newUser);
        } catch (error){
            console.error(error);
            if (error.code == 11000){
                reply.status(409).send({message: 'E-Mail já cadastrado.'});
            }else{
                reply.status(500).send({message: 'Ocorreu um erro ao salvar.'});
            }
        }
    });
}

module.exports = userRoutes;
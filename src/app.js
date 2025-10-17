const fastify = require("fastify");
const userRoutes = require("./routes/user");

function buildApp() {
    const app = fastify({ logger: true });

    app.register(userRoutes, { prefix: '/api' });

    return app;
}

module.exports = buildApp;
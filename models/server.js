const express = require('express');
const cors = require('cors');

const { socketControllers } = require('../sockets/controller');

class Server {
    constructor() {
        this.app = express();
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        // path de rutas
        this.path = {};
        // Middleware
        this.middleware();

        // Rutas del servidor
        this.routes();

        this.sockets();
    }

    middleware() {
        // Cors
        this.app.use(cors());
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.use(this.path.auth, require('../routes/auth'));
    }

    sockets() {
        this.io.on("connection", socketControllers);
    };

    listen(port) {
        this.server.listen(port, () => {
            console.log(`Servidor iniciado en htts://localhost:${port}`);
        });
    }

    async conectarDB() {
        await dbConnection();
    }
}

module.exports = Server;
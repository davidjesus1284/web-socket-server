const socketControllers = (socket) => {

    console.log(`Cliente conectado: ${socket.id}`);

    socket.on('disconnect', () => console.log("Cliente desconectado"));
    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456;
        callback({ id, fecha: new Date().getFullYear() });
        socket.broadcast.emit('enviar-mensaje', payload);
    });
};


module.exports = {
    socketControllers
};
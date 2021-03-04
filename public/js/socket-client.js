const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', () => {
    // console.log("Conectado");
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    // console.log("Desconectado del servidor");
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log("Mensaje llegando del backend", payload);
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        id: '123abc',
        mensaje,
        fecha: new Date().getTime()
    };

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log(`Mensaje enviado desde el front: ${payload.mensaje}`);
        console.log('Respuesta desde el server', id);
    });
});
const socket = new WebSocket(
    'wss://connect.websocket.in/h4ck3r_m4n?room_id=1989'
);

// Connection opened
socket.addEventListener('open', function() {
    document.addEventListener('keyup', () => {
        const text = document.getElementById('txtArea').value;
        socket.send(text);
    });
});

// Listen for messages
socket.addEventListener('message', function(event) {
    document.getElementById('txtArea').value = event.data;
});

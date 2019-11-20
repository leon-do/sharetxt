// number between 1-10000
const channelId = '123'

const socket = new WebSocket(
  `wss://connect.websocket.in/v2/${channelId}?token=${config.token}`
);

// Connection opened
socket.addEventListener('open', function(event) {
    console.log(event)
  document.addEventListener('keyup', e => {
    const text = document.getElementById('txtArea').value;
    socket.send(text);
  });
});

// Listen for messages
socket.addEventListener('message', function(event) {
  document.getElementById('txtArea').value = event.data;
});
const socket = new WebSocket(
  'wss://connect.websocket.in/v2/MY_CHANNEL_ID4444?token=MY_ACCESS_TOKEN4444'
);

// Connection opened
socket.addEventListener('open', function(event) {
  document.addEventListener('keyup', e => {
    const text = document.getElementById('txtArea').value;
  socket.send(text);
  });
});

// Listen for messages
socket.addEventListener('message', function(event) {
  document.getElementById('txtArea').value = event.data;
});

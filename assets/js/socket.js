// const id = window.location.search.split('?').pop()

// const socket = new WebSocket(
//   `wss://connect.websocket.in/v2/${id}?token=${config.token}`
// );

// // Connection opened
// socket.addEventListener('open', function(event) {
//   document.addEventListener('keyup', e => {
//     const text = document.getElementById('txtArea').value;
//     socket.send(text);
//   });
// });

// // Listen for messages
// socket.addEventListener('message', function(event) {
//   document.getElementById('txtArea').value = event.data;
// });
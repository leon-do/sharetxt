const socket = new WebSocket(
  'wss://connect.websocket.in/h4ck3r_m4n?room_id=1989'
);

// Connection opened
socket.addEventListener('open', function(event) {

  //Notify On New Connection
  socket.send('connection-notify');

  //On New Write Up
  document.addEventListener('keyup', e => {
    const text = document.getElementById('txtArea').value;
    socket.send('message'+"-"+text);
  });
})


// Listen for messages
socket.addEventListener('message', function(event) {

  //Type Of Message
  var split=event.data.split("-");

  if(split[0]==="connection"){

    //Using Notify.js for notification
    $.notify("New Connection Added!!", "success");
  }

  else{
    document.getElementById('txtArea').value = split[1];
  }

});

var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('positions', function(data) {  
  console.log(data);
  html = '<span class="info">Posx :'+data.posx+'</span>';
  html += '<span class="info">Posy :'+data.posy+'</span>';
  html += '<span class="info">Posz :'+data.posz+'</span>';
  document.getElementById('informacion').innerHTML = html;
});

socket.on('messages', function(data) {  
  console.log(data);
});

function addMessage(e) {  
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}
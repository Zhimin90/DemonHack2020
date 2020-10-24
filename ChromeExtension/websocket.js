function WebSocketCall(data) {
       
    if ("WebSocket" in window) {
       alert("WebSocket is supported by your Browser!");
       
       // Let us open a web socket
       var ws = new WebSocket("ws://localhost:9998/echo");

       ws.onopen = function() {
          
          // Web Socket is connected, send data using send()
          ws.send(data);
          alert("Message is sent...");
       };

       ws.onmessage = function (evt) { 
          var received_msg = evt.data;
          alert("Message is received...");
       };

       ws.onclose = function() { 
          
          // websocket is closed.
          alert("Connection is closed..."); 
       };
    } else {
      
       // The browser doesn't support WebSocket
       alert("WebSocket NOT supported by your Browser!");
    }

 }
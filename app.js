// app.js
const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola desde Docker!');
}).listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

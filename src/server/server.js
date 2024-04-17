const http = require('http');
const fs = require('fs');

const productsData = [
  { id: 1, name: "Orions", description: "A4 Bondpaper", price: 300 },
  { id: 2, name: "HBW", description: "Ballpen", price: 150 },
  { id: 3, name: "Mongol", description: "Pencil", price: 30 },
  { id: 4, name: "Excellent", description: "Yellow Pad", price: 80 },
  { id: 5, name: "Epson", description: "Ink", price: 350 }
];

const server = http.createServer((req, res) => {
  if (req.url === '/products' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsData));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});

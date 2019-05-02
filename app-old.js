const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'aplication/json'
        });
        let salida = {
                nombre: 'Nombre',
                edad: 32,
                url: req.url
            }
            // res.write("Hola mundo");
        res.write(JSON.stringify(salida));
        res.end();
    })
    /*.listen(8080);
console.log('Escuchando puerto 8080')*/

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})
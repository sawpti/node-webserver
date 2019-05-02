const express = require("express");
const app = express();
const hbs = require("hbs");
app.use(express.static(__dirname + "/public"));
// Espress HBS

hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    // res.send('Hola Mundo')
    //  let salida = "Hola Data";
    res.render("home", {
        nombre: "hugo MaRTineZ"
            // anio: new Date().getFullYear(),
    });

});
app.get("/about", (req, res) => {
    res.render("about");

});



// app.get('/', (req, res) => {
//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Nombre',
//         edad: 32,
//         url: req.url
//     };
//     res.send(salida)
// });
// app.get('/data', (req, res) => {
//     // res.send('Hola Mundo')
//     let salida = "Hola Data";
//     res.send(salida)
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
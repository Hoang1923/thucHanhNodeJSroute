const  express  = require('express')
const path = require('path')
const app = express()

const publicDirectory = path.join(__dirname, 'public');
app.use(express.static(publicDirectory));


function trangChu(request, response){

}

app.get('/', (req, res) =>{
    res.sendFile(path.join(publicDirectory, '/templates/trangChu.html'))
})

app.get('/chi-tiet-san-pham', (req, res) =>{
    res.sendFile(path.join(publicDirectory, '/templates/chiTietSP.html'))
})

app.listen(3001, () =>{
    console.log('hello')
})

module.exports = app;
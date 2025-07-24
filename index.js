const http = require('http')
const fs = require('fs')
const charadas = require('./charadas.json')

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const indice = Math.floor(Math.random() * charadas.length)
    const charada = charadas[indice]
    const html = fs.readFileSync(__dirname + '/index.html', 'utf8')
      .replace('{{pergunta}}', charada.pergunta)
      .replace('{{resposta}}', charada.resposta)
    res.end(html)
  } else if (req.url === '/favicon.jpg') {
    const favicon = fs.readFileSync(__dirname + '/public/favicon.jpg')
    res.writeHead(200, { 'Content-Type': 'image/jpg' })
    res.end(favicon)
  } else if (req.url === '/charada.jpg') {
    const imagem = fs.readFileSync(__dirname + '/public/charada.jpg')
    res.writeHead(200, { 'Content-Type': 'image/jpg' })
    res.end(imagem)
  }
  console.log(req.url)
}).listen(3000, err => {
  if (err) {
    console.log('Deu ruim :/')
    return
  }
  console.log('Rodando na porta 3000...')
})

//Para o Ctrl + C funcionar no Docker ¯\_(ツ)_/¯
process.on('SIGINT', () => {
  console.log('\nShutting down!')
  process.exit(0)
})
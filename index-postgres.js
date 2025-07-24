const http = require('http')
const fs = require('fs')
const { Client } = require('pg')

const buscaCharadaAleatoria = callback => {
  const client = new Client({
    connectionString: 'postgresql://helton:postgres-password@db:5432/charadas'
  })
  client.connect()
  
  const query = `
    select pergunta, resposta 
      from charada
    where id = (
      select floor(random() * (select count(*) from charada))
    )
  `

  client.query(query, (err, res) => {
    callback(res.rows[0])
    client.end()
  })

}

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    buscaCharadaAleatoria(charada => {
      console.log('Charada vinda do banco! ' + JSON.stringify(charada))
      const html = fs.readFileSync(__dirname + '/index.html', 'utf8')
        .replace('{{pergunta}}', charada.pergunta)
        .replace('{{resposta}}', charada.resposta)
      res.end(html)
    })
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
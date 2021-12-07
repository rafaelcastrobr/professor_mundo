let express = require('express');
let app = express();

app.get('/', function(req, res){
  res.send('Primeira rota com express');
});

app.get('/teste', function(req, res) {
  res.send('Vai porra sobe')
})

app.listen(3000, function() {
  console.log('Aplicação está funcionando na porta 3000')
});
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API Pretademia está sendo executada na porta ${PORT}`);

});
const [{ Server: h1 }, { createReadStream }] = [require('http'), require('fs')];

const PORT = 9999;

h1
  ((req, res) => createReadStream(__dirname + '/index.html').pipe(res))
  .listen(process.env.PORT || PORT, () => console.log(process.pid));

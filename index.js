var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: '8a4bc7431fb4fac74b61247a66877e5d'
, privateKey: '88ed205c151e8b9c58afc3513bde540f111cfb7d'
});


marvel.characters.findByName('spider-man')
  .then(function(res) {
    console.log('Found character ID', res.data[0].id);
    return marvel.characters.comics(res.data[0].id);
  })
  .then(function(res) {
    console.log('found %s comics of %s total', res.meta.count, res.meta.total);
    console.log(res.data);
  })
  .fail(console.error)
  .done()

marvel.characters.findByName('thor')
  .then(function(res) {
    console.log('Found character ID', res.data[0].id);
    return marvel.characters.comics(res.data[0].id);
  })
  .then(function(res) {
    console.log('found %s comics of %s total', res.meta.count, res.meta.total);
    console.log(res.data);
  })
  .fail(console.error)
  .done();;

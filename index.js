#!/usr/bin/env node
var debug = require('debug')('veria');
var app = require('./app');

app.set('port', process.env.VERIAPORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
  console.dir('Veria Server Started..', {colors:true});
});

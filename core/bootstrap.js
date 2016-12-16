const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('./express');
const http = require('http').Server(express);
const port = process.env.PORT || 1111;
const colors = require('colors');
const requireDirectory = require('require-directory');
const modulesController = requireDirectory(module, '../modules');

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // initial cors
  require('./cors')(express);
  // initial http
  require('./http')(express);
  // initial static folder
  require('./static')(express);
  // initial view
  require('./view')(express);
  // initial route
  require('./../config/route')(express, modulesController);
  http.listen(port, function () {
    console.log(colors.green('Enabled  ' + numCPUs + ' cpu, do not care this message let is see on browser http://localhost:' + port));
  });
}
const express = require('express');
const ini = require('ini');
const fs = require('fs');

module.exports = function (config) {
  let opts = {};
  try {
    opts = ini.parse(fs.readFileSync('./.screepsrc', {encoding: 'utf8'}));
    opts = opts.webpagedir || 'static';
  }
  catch(e) {
  }
  config.backend.on('expressPreConfig', (app) => {
    app.use('/', express.static(opts));
  });
}
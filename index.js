#!/usr/bin/env node
'use strict'
const fs   = require('fs');
const path = require('path');

module.exports = eval(fs.readFileSync(path.join(__dirname, 'lib/mo39.js'), 'utf8'));


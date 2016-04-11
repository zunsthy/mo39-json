#!/usr/bin/env node
'use strict'
const fs = require('fs');

module.exports = eval(fs.readFileSync('lib/mo39.js', 'utf8'));


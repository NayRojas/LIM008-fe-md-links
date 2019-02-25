#!/usr/bin/env node
const mdLinks = require('./index')
const [, , ...params] = process.argv;

const options = {
    validate: true,
    stats: false
};

const { before, pkg, readJSON, writeJSON } = require('../../src');

exports.pkg = () => console.log(`pkg: ${pkg().version}`);

exports.readJSON = () =>
  console.log(`readJSON: ${readJSON('./package.json').version}`);

exports.writeJSON = () => writeJSON('./test.json', { version: '1.0.0' });

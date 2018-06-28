// This file isn't transpiled, so muse use CommonJS and ES5

// Register babel to transpile before our test runs
require('babel-register');

// Disable webpack feautres that mocha doesn't understand
require.extensions['.css'] = function () { };

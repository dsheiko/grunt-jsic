/*
 * grunt-jscs
 * https://github.com/dsheiko/grunt-jscs
 *
 * Copyright (c) 2013 Dmitry Sheiko
 * Licensed under the MIT license.
 * @jscs standard:Jquery
 */

'use strict';

module.exports = function( grunt ) {

    // Internal lib.
    var jscs = require('./lib/jsic').init( grunt );

    grunt.registerMultiTask( 'jsic', 'Run jsic', function() {
        jscs.setup( this );
        jscs.run();
    });
};

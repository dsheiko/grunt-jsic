/*
 * grunt-jsic
 * https://github.com/dsheiko/grunt-jsic
 *
 * Copyright (c) 2013 Dmitry Sheiko
 * Licensed under the MIT license.
 * @jsic standard:Jquery
 */
'use strict';

// External libs.
var path = require('path');
var exec = require('child_process').exec;

exports.init = function( grunt ) {
    var exports = {},
        defaults = {
            // Default options
            bin: 'node ./node_modules/jsic/jsic'
        },
        cmd = null,
        done = null,
        config = {};

    /**
     * Builds phpunit command
     *
     * @return string
     */
    var buildCommand = function() {

        var cmd = path.normalize( defaults.bin );
        return cmd;
    };

    /**
     * Setup task before running it
     *
     * @param Object runner
     */
    exports.setup = function( runner ) {

        var input = runner.data[ 0 ],
            output = runner.data[ 1 ];
        cmd = buildCommand() + ' ' + input + ' ' + output;

        grunt.log.writeln( 'Starting jsic ' + input + ' ' + output );
        grunt.verbose.writeln( 'Exec: ' + cmd );

        done = runner.async();
    };

    /**
     * Runs phpunit command with options
     *
     */
    exports.run = function() {

        exec( cmd, function( err, stdout, stderr ) {

            if ( stdout ) {
                grunt.log.write( stdout );
            }

            if ( err ) {
                grunt.fatal( err );
            }
            done();
        });
    };

    return exports;
};
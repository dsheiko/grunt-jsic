/*
 * grunt-jscs
 * https://github.com/dsheiko/grunt-jscs
 *
 * Copyright (c) 2013 Dmitry Sheiko
 * Licensed under the MIT license.
 * @jscs standard:Jquery
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function( grunt ) {

    var argv = [ "node", "jsic" ],
				compileJsic = function( srcFile, destFile, done ) {
					var jsic = require( "jsic" ),
							cmd = 'node jsic ' + srcFile + ' ' + destFile;

					argv.push( srcFile );
					argv.push( destFile );

					grunt.log.writeln('File ' + destFile.cyan + ' created.');
					grunt.verbose.writeln( 'Exec: ' + cmd );

					jsic( argv );
					done();
			};


    grunt.registerMultiTask( 'jsic', 'Run jsic', function() {
      var done = this.async();
      if ( this.files.length < 1 ) {
        grunt.verbose.warn('Destination not written because no source files were provided.');
      }
      grunt.util.async.forEachSeries( this.files, function( f, nextFileObj ) {
        var destFile = f.dest,
            srcFile = f.src.shift();

        if ( !grunt.file.exists( srcFile ) ) {
          grunt.log.warn('Source file "' + srcFile + '" not found.');
          return false;
        }
        compileJsic( srcFile, destFile, done );
        nextFileObj();
      }, done);

    });
};

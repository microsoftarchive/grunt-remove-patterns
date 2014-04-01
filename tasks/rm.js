var npath = require('path');
var fs = require('fs');
var child = require('child_process');

module.exports = function (grunt) {

  'use strict';

  var glob = grunt.file.glob;
  var async = grunt.util.async;

  function RecursiveRemove () {

    var done = this.async();
    var options = this.options();
    var dir = npath.resolve(options.dir);
    var patterns = options.patterns;

    async.forEachLimit(patterns, 10, function (pattern, callback) {

      var files = glob.sync(pattern, {
        'cwd': dir
      });
      async.forEachLimit(files, 10, function (file, _callback) {
        file = npath.resolve(dir, file);
        child.exec('rm -rf ' + file, function () {
          _callback();
        });
      }, callback);
    }, done);
  }

  grunt.registerTask('rm', RecursiveRemove);
};
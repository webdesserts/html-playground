var gulp = require('gulp'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    spawn = require('child_process').spawn;

var node, lr;

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */

gulp.task('server', function() {
  if (node) {
    node.kill();
    gutil.log('[node] changes detected')
  }

  node = spawn('node', ['server.js'], {stdio: 'inherit'})

  node.on('close', function (code) {
    if (code === 8) {
      gutil.log('Error detected, waiting for changes...');
    }
  });
})

/**
 * $ gulp
 * description: start the development environment
 */

gulp.task('default', ['server'], function() {
  lr = livereload(),

  gulp.watch('./public/**').on('changed', function(file) {
    lr.changed(file.path)
  })

  gulp.watch(['./server.js'], ['server'])
})

// clean up if an error goes unhandled
process.on('exit', function() {
  if (node) {
    gutil.log('[node] killing server')
    node.kill()
  }
})


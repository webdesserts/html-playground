var gulp = require('gulp'),
    logger = require('morgan'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

/**
 * $ gulp server
 * description: start the server
 */

gulp.task('server', function() {
  browserSync.init({

    server: {
      // Starts the server in the public folder
      baseDir: 'public',

      // shows you what files are people requesting from your server
      middleware: logger('dev')
    },

    // who all is connecting to your server?
    logConnections: true,

    // Set this to false if you want to remove the pesky popup
    notify: true,

    // Set this to true if you want multiple instances of your app
    // to mirror your commands
    ghostMode: false,

    // Want to show your creation to your friends?
    // Uncomment the following line and give them the tunnel url
    // that appears in your terminal

    //tunnel: true,

    // Automatically open your site in your browser
    open: true,


  })
})

/**
 * $ gulp
 * description: start the server
 */

gulp.task('default', ['server'])

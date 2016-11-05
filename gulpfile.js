var gulp        = require('gulp');
var gutils      = require('gulp-util');
var browserify  = require('browserify');

var gif         = require('gulp-if');
var source      = require('vinyl-source-stream');
var sequence    = require('run-sequence');
var uglify      = require('gulp-uglify');
var streamify   = require('gulp-streamify');

var inProduction = gutils.env.production || process.env.NODE_ENV === 'production';

var config = {
  compression : inProduction,
  sourcemap   : inProduction,
};

var scripts = {
  'app' :  './src/js/main.js'
};

for (var name in scripts) {
  script(name, scripts[name]);
}

function script(name, path) {
  gulp.task('js.watch.'+name, function(callback) {
    sequence(
      ['js.'+name],
      callback
    );
  });  
  gulp.task('js.'+name, function() {
    var b = browserify({
      entries: path,
      transform: ['vueify', 'babelify', 'aliasify'],
    });
    return b.bundle()
      .pipe(source(name+'.js'))
      .pipe(gif(config.compression, streamify(uglify())))
      .pipe(gulp.dest('./public/build'));
  });
}

gulp.task('watch', function(callback) {
    gulp.watch('./src/**/*', [
      'js.watch.'+name,
    ]);
});

gulp.task('default', function(callback) {
  var tasks = [];
  for(var name in scripts) {
    tasks.push('js.'+name);
  }
  sequence(
    tasks,
    callback
  );
});
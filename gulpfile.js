const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const groupmq = require('gulp-group-css-media-queries');
const bs = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const minify = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');

/**
 * Compile Sass files
 */
gulp.task('compile:sass', () =>
  gulp
    .src('sass/**/*.scss') // Grab all sass files in sass folder
    .pipe(plumber()) // Prevent termination on error
    .pipe(
      sass({
        indentType: 'tab',
        indentWidth: 1,
        outputStyle: 'expanded' // Expanded so that our CSS is readable
      })
    )
    .on('error', sass.logError)
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        })
      ])
    )
    .pipe(groupmq()) // Group media queries!
    .pipe(gulp.dest('./src/styles/css')) // Output compiled files in the CSS folder
    .pipe(bs.stream())
); // Stream to browserSync

/**
 * Start up browserSync and Watch Sass files for changes
 */
gulp.task('watch:sass', ['compile:sass'], () => {
  bs.init({
    proxy: 'http://localhost:8888/sober-life', //change the name of the project here
  });

  gulp.watch('sass/**/*.scss', ['compile:sass']);
});

gulp.task('js', function(){
 gulp.src('src/scripts/*.js')
 .pipe(concat('final-script.js'))
 .pipe(uglify())
 .pipe(gulp.dest('build/scripts/')); // the final minified and concatted .js file will be found here
});

gulp.task('css', function(){
   gulp.src('src/styles/css/*.css')
   .pipe(concat('final-styles.css'))
   .pipe(minify())
   .pipe(gulp.dest('build/styles/')); // the final minified and concatted .css file will be found here
});

gulp.task('img', function() {
  gulp.src('img/src/*.{png,jpg,gif}')
  .pipe(imagemin({
    optimizationLevel: 7,
    progressive: true
  }))
  .pipe(gulp.dest('img'))
});

/**
 * Default task executed by running `gulp`
 */
gulp.task('default', ['watch:sass', 'css', 'img'], function () {
  // watch for CSS changes
  gulp.watch('src/styles/css/*.css', function() {
    // run css upon changes
    gulp.run('css');
  });
  // watch for images changes
  gulp.watch('img/src/*.{png,jpg,gif}', function() {
    gulp.run('img');
  });
});

gulp.task('build', ['js']);
var gulp         = require('gulp'),
    sass         = require('gulp-sass'), 
    browserSync  = require('browser-sync'), 
    concat       = require('gulp-concat'), 
    uglify       = require('gulp-uglifyjs'), 
    cssnano      = require('gulp-cssnano'), 
    rename       = require('gulp-rename'), 
    del          = require('del'), 
    cache        = require('gulp-cache'), 
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){ 
    return gulp.src('app/sass/main.sass') 
        .pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({stream: true})); 
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});
gulp.task('scripts', function() {
    return gulp.src('app/libs/**/*.js')
        .pipe(concat('libs.min.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('app/js')); 
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
    gulp.watch('app/sass/**/*.+(scss|sass)', ['sass'], browserSync.reload); 
    gulp.watch('app/**/*.css', browserSync.reload); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload);   
});
gulp.task('clean', function() {
    return del.sync('build'); 
    
});

gulp.task('css-min', function() {
    return gulp.src('app/css/main.css')
            .pipe(cssnano())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('app/css'));
});
gulp.task('js-min', function() {
    return gulp.src('app/js/main.js')
            .pipe(uglify())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('app/js'));
});
gulp.task('min', ['css-min', 'js-min']);

gulp.task('build', ['clean', 'min', 'sass', 'scripts'], function() {

    var buildImage = gulp.src('app/img/**/*')
    .pipe(gulp.dest('build/img'))

    var buildCss = gulp.src('app/css/**/*')
    .pipe(gulp.dest('build/css'))

    var buildFonts = gulp.src('app/fonts/**/*') 
    .pipe(gulp.dest('build/fonts'))

    var buildJs = gulp.src('app/js/**/*') 
    .pipe(gulp.dest('build/js'))

    var buildHtml = gulp.src('app/*.html') 
    .pipe(gulp.dest('build'));

});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);

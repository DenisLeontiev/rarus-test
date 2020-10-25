const gulp = require('gulp');
const html = require('gulp-html');
const webpackStream = require('webpack-stream');
const gulpAutoprefix = require('gulp-autoprefixer');
const gulpSass = require('gulp-sass');
const gulpWatch = require('gulp-watch');
const gulpSourceMap = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');
const webpackConfig = require('./webpack.config.js');

gulp.task('stylesheets', () => gulp.src('./src/scss/**/*.scss')
    .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
            {
                formatter: 'string',
                console: true,
            },
        ],
    }))
    .pipe(gulpSourceMap.init())
    .pipe(gulpSass({
        outputStyle: 'compressed',
    })).on('error', gulpSass.logError)
    .pipe(gulpAutoprefix({
        browsers: ['last 2 versions'],
    }))
    .pipe(gulpSourceMap.write())
    .pipe(gulp.dest('./dev/css/'))
    .pipe(browserSync.stream()));

gulp.task('stylesheetsProduction', () => gulp.src('./src/scss/**/*.scss')
    .pipe(gulpStylelint({
        failAfterError: true,
        reporters: [
            {
                formatter: 'string',
                console: true,
            },
        ],
    }))
    .pipe(gulpSass({
        outputStyle: 'compressed',
    })).on('error', gulpSass.logError)
    .pipe(gulpAutoprefix({
        browsers: ['last 2 versions'],
    }))
    .pipe(gulp.dest('./build/css/')));

gulp.task('js', () => gulp.src('./src/js/app.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('./dev/js'))
    .pipe(browserSync.stream()));

gulp.task('jsProduction', () => {
    webpackConfig.watch = false;

    gulp.src('./src/js/app.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('html', () => gulp.src('./src/template/**/*.html')
    .pipe(html())
    .pipe(gulp.dest('./dev')));

gulp.task('htmlProduction', () => gulp.src('./src/template/**/*.html')
    .pipe(html())
    .pipe(gulp.dest('./build')));

gulp.task('watch', () => {
    gulpWatch(['./src/scss/**/*.scss'], () => {
        gulp.start('stylesheets');
    });
    gulpWatch(['./src/template/**/*.html'], () => {
        gulp.start('html');
    });
});

gulp.task('server', () => {
    browserSync.init({
        server: './dev',
        open: true,
        port: 8081,
    });
});

gulp.task('development', [
    'stylesheets',
    'js',
    'html',
    'watch',
    'server',
]);

gulp.task('production', [
    'stylesheetsProduction',
    'jsProduction',
    'htmlProduction',
]);

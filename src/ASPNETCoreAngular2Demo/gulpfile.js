/// <binding BeforeBuild='get:started' />
var gulp = require('gulp');
var runSeq = require('run-sequence');
var del = require('del');

var buildConfig = require('./gulp.config');

gulp.task('get:started', function (done) {
    runSeq(
        'clean-vendor-js-in-root',
        'clean-vendor-css-in-root',
        'clean-app-in-root',
        'copy-app',
        'copy-vendor-js-to-wwwroot',
        'copy-vendor-css-to-wwwroot',
        done);
});

gulp.task('clean-vendor-js-in-root', function (done) {
    del(buildConfig.rootJsFolder, { force: true }).then(function () {
        done();
    });
});

gulp.task('clean-vendor-css-in-root', function (done) {
    del(buildConfig.rootCssFolder, { force: true }).then(function () {
        done();
    });
});

gulp.task('clean-app-in-root', function (done) {
    del(buildConfig.rootAppFolder, { force: true }).then(function () {
        done();
    });
});

gulp.task('copy-vendor-js-to-wwwroot', function (done) {
    runSeq(
        'copy-angular',
        'copy-rxjs',
        'copy-toastr',
        'copy-loadingBar',
        'copy-allOther',
        done);
});

gulp.task('copy-angular', function () {
    return gulp.src(buildConfig.sources.angularRC)
        .pipe(gulp.dest(buildConfig.rootJsFolder + '@angular/'));
});

gulp.task('copy-app', function () {
    return gulp.src([
        './angular2app/**/*.js',
        './angular2app/**/*.ts',
        './angular2app/**/*.js.map',
        './angular2app/**/*.html',
        './angular2app/**/*.css',
    ])
        .pipe(gulp.dest('./wwwroot/app/'));
});

gulp.task('copy-rxjs', function () {
    return gulp.src(buildConfig.sources.Rxjs)
        .pipe(gulp.dest(buildConfig.rootJsFolder + 'rxjs/'));
});

gulp.task('copy-toastr', function () {
    return gulp.src(buildConfig.sources.angularToastr)
        .pipe(gulp.dest(buildConfig.rootJsFolder + 'angular2-toaster/'));
});

gulp.task('copy-loadingBar', function () {
    return gulp.src(buildConfig.sources.angularLoadingBar)
        .pipe(gulp.dest(buildConfig.rootJsFolder + 'ng2-slim-loading-bar/'));
});

gulp.task('copy-allOther', function () {
    return gulp.src(buildConfig.sources.jsFilesInclSourcePaths)
        .pipe(gulp.dest(buildConfig.rootJsFolder));
});

gulp.task('copy-vendor-css-to-wwwroot', function () {
    return gulp.src(buildConfig.sources.cssVendorFiles)
        .pipe(gulp.dest(buildConfig.rootCssFolder));
});

gulp.task('start-watch', function () {
    gulp.watch([
        './angular2app/**/*.js',
        './angular2app/**/*.html',
        './angular2app/**/*.css',
    ], ['copy-app']);
});
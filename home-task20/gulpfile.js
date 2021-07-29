const { src, dest, task, watch, series } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const compileSass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concatCss = require('gulp-concat-css');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const del = require('del');


// Clean assets
function clean() {
    return del(['build']);
}

function bundleSass() {
    return src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(compileSass({outputStyle: 'compressed'}).on('error', compileSass.logError))
        .pipe(concatCss('/main.min.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest('build/css'))
}

function buildJs(){
    return src(['src/**/*.js', 'src/*.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('build/js'));
}

function watchFiles(){
    watch(['src/**/*.js', 'src/*.js'], buildJs);
    watch(['src/**/*.scss', 'src/*.scss'], bundleSass);
}

task('clean', clean);
task('buildJs', buildJs);
task('bundleSass', bundleSass);
task('watchFiles', watchFiles);

task('buildAll', series(clean, buildJs, bundleSass));

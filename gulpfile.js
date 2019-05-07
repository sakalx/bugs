const gulp = require('gulp');
const clean = require('gulp-clean');
const svgMin = require('gulp-svgmin');
const svgSprite = require('gulp-svg-sprite');

const developSVG = './src/static/svg';

gulp.task('svg-clean', () => gulp.src([
      `${developSVG}/minified`,
      `${developSVG}/symbol`,
    ], {read: false}).pipe(clean()),
);

gulp.task('svg-min', () => gulp.src(`${developSVG}/original/**/*.svg`).
    pipe(svgMin({
      plugins: [
        {removeDoctype: false},
        {removeTitle: true},
        {cleanupNumericValues: {floatPrecision: 1}},
      ],
    })).pipe(gulp.dest(`${developSVG}/minified/`)),
);

gulp.task('svg-sprite', () => gulp.src('minified/*.svg', {cwd: developSVG}).
    pipe(svgSprite({
      shape: {
        dimension: {maxWidth: 32, maxHeight: 32},
        spacing: {padding: 3},
      },
      mode: {
        view: false,
        symbol: true,
      },
    })).
    pipe(gulp.dest(developSVG)),
);
'use strict';

var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var fontastic = require('gulp-fontastic');

// Default options
var options = {
    font_dir: 'public/fonts/',
    font_path: '/fonts/',
    style_path: 'scss/',
    scss: true
};

var Task = Elixir.Task;

Elixir.extend('fontastic', function(apiKey, stylePath, fontDir, fontPath, fontName, scss) {

    if (apiKey === undefined) {
        return new Elixir.Log.message('ERROR: API key missing for Fontastic');
    }

    fontDir = (fontDir === undefined) ? 'fonts' : fontDir;

    stylePath = (stylePath === undefined) ? 'scss' : stylePath;

    var options = {
        key: apiKey,
        style_path: stylePath,
        font_dir: fontDir,
        font_path: fontPath,
        scss: scss
    };

        new Elixir.Log.message(options);


    if (fontName !== undefined) {
        options.font_name = fontName;
    }

    new Task('fontastic', function() {
        new Elixir.Log.message('Downloading from Fontastic...');
        return gulp.src('')
                   .pipe(fontastic(options));
    });

});

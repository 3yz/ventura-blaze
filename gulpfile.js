require('laravel-elixir-stylus');

var elixir = require('laravel-elixir'),
koutoSwiss = require('kouto-swiss'),
jeet = require('jeet'),
rupture = require('rupture');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.scripts([
        "vendor/jquery.js",
        "plugins.js",
        "app.js"
    ], 'public/js/all.js')
    .scripts(['checklist.js'], 'public/js/checklist.js')
    .stylus('app.styl', null , {use: [koutoSwiss(), jeet(), rupture()] })
    .version(['css/app.css', 'js/all.js'])
    .browserSync({proxy: 'localhost:8000'});
});

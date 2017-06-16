let elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

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

//noinspection BadExpressionStatementJS
elixir(function(mix) {
    mix
        .sass('app.scss')
        .webpack('app.js');

    mix
        .copy('resources/assets/bower_components/bootstrap/dist/fonts', 'public/build/fonts');

    mix
        .styles([
            '../bower_components/bootstrap/dist/css/bootstrap.css'
        ], 'public/css/vendor.css');

    mix
        .version(['css/vendor.css', 'js/app.js']);
});

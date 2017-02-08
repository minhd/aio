const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.combine(
    [
        'node_modules/bulma/css/bulma.css',
        'node_modules/animate.css/animate.css',
        'node_modules/font-awesome/css/font-awesome.min.css'
    ],
    'public/css/lib.css'
);

mix.copy('node_modules/font-awesome/fonts/*', 'public/fonts/');

mix.js('resources/assets/js/bootstrap.js', 'public/js/lib.js');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

let mix = require('laravel-mix'); // pasiimam "laravel-mix" paketa

mix.js('src/app.js', 'public/js') // kompiluojam js
.sass('src/scss/style.scss', 'css') // kopmpiliuojam scss
.setPublicPath('public'); // narsykles aplanalas
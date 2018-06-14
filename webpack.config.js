let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .autoProvidejQuery()
    .addEntry('app', './assets/js/app.js')
    .addEntry('active', './assets/js/active.js')
    .addEntry('footer', './assets/js/footer-reveal.min.js')
    .addEntry('plugin', './assets/js/plugins.js')
    .addEntry('popper', './assets/js/popper.min.js')
    .addEntry('slick', './assets/js/slick.min.js')
    .addStyleEntry('main', './assets/scss/main.scss')
    .addStyleEntry('index', './assets/scss/index.scss')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSassLoader();

module.exports = Encore.getWebpackConfig();
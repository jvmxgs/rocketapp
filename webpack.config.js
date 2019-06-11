var path = require('path');
module.exports = {
    entry: './js/rocketGame.js',
    output: {
        path: path.resolve(__dirname, 'build/www/js'),
        filename: 'rocketgame.js'
    },
    devServer: {
        compress: true
    },
    mode: 'production'
}

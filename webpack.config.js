const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        host: 'local.jd.com',
        port: 8080,
        static: path.join(__dirname, 'public'),
    },
};
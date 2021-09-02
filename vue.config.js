const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                secure: false,
                target: 'https://localhost:8000',
            },
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                app: path.resolve(__dirname, 'src/'),
            },
        },
    },
};
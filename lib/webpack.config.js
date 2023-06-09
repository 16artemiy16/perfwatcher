const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'perfwatcher',
            type: 'commonjs'
        },
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: 'dist',
        compress: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            query: {
                declaration: false,
            }
        }]
    }
}
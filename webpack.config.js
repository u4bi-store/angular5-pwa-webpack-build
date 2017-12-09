const path    = require('path'),
      webpack = require('webpack');

module.exports = {
    entry: {
        polyfills : './src/polyfills.ts',
        vendor    : './src/vendor.ts',
        app       : './src/main.ts'
    },
    output: {
        filename: '[name].js',
        path : path.resolve(__dirname, 'dist')
    },
    resolve: { extensions: ['.ts', '.js'] },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './src'))
    ]
}

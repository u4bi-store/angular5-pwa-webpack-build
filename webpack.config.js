const path        = require('path'),
      webpack     = require('webpack');
      HtmlWebpack = require('html-webpack-plugin');

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
    // devtool: 'inline-source-map',    
    resolve: { extensions: ['.ts', '.js'] },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    },
                    'angular2-template-loader'
                ]
            },
            { test: /\.(css|html)$/, loader: 'raw-loader' }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './src')),
        new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            output: { comments: false },
        }),
        new HtmlWebpack({
            template: './src/index.html',
            inject: false
        })
    ]
}

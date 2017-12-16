const path        = require('path'),
      webpack     = require('webpack');
      HtmlWebpack = require('html-webpack-plugin');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

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
                    'angular2-template-loader',
                    '@ngtools/webpack'
                ]
            },
            { test: /\.(css|html)$/, loader: 'raw-loader' },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }
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
        }),
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule',
            sourceMap: true
        })
    ]
}

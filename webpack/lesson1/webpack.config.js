const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        home: './src/home.js',
    },
    output: {
        filename: 'js/[hash].[name].bundle.js',
        // path: path.resolve(__dirname, 'dist')
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                          limit: 8192,
                        },
                      },
                //   {
                //     loader: 'file-loader',
                //     options: {
                //         name: '[path][name].[ext]',
                //         publicPath: '../../',
                //      },
                //   },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App1111',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[hash].[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyPlugin([
            {
              from: 'public',
              to: 'public',
            }
        ]),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      }
}
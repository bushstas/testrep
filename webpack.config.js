'use strict';

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, "src")
            ],
            loader: "babel-loader",
            options: {
              presets: ["es2017", "react", "flow"]
            }
          },
          {
            test: /\.scss$/,
            include: [
              path.resolve(__dirname, "src")
            ],
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader'
                }, 
                {
                  loader: 'sass-loader'
                },
                {
                  loader: 'postcss-loader'
                }
              ]
            })
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
          inject: 'body'
        }),
        new ExtractTextPlugin('style.css')
    ]

}


// const webpack = require('webpack');
// const path = require('path');
// const pr = path.resolve;


// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CONFIG = require('config');

// module.exports = {
//     context: CONFIG.app.root,
//     devtool: 'source-map',
//     entry: CONFIG.entry,
//     resolve: {
//         root: [
//             CONFIG.base.root,
//             CONFIG.app.root
//         ],
//         modulesDirectories: [
//             pr(__dirname, 'node_modules'),
//             path.join(__dirname, '../app/node_modules')
//         ]
//     },
//     resolveLoaders: {
//         root: [CONFIG.app.root]
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/, 
//                 exclude: /node_modules/, 
//                 loader: pr(CONFIG.build.node_modules, "babel-loader"),
//                 query: {
//                     "compact": false,
//                     "presets": [
//                         pr(CONFIG.build.node_modules, "babel-preset-react"),
//                         pr(CONFIG.build.node_modules, "babel-preset-es2015"),
//                         pr(CONFIG.build.node_modules, "babel-preset-stage-0")
//                     ],
//                     "plugins": [
//                         pr(CONFIG.build.node_modules, "babel-plugin-transform-decorators-legacy"),
//                         pr(CONFIG.build.node_modules, "babel-plugin-transform-class-properties"),
//                     ]
//                 }
//             },
//             { 
//                 test: /\.(jpg|gif|svg|png|ttf|eot|svg|woff(2)?)(\S+)?$/,
//                 loader: pr(CONFIG.build.node_modules, "file-loader"),
//                 query: {
//                     name: "images/[name].[ext]"
//                 }
//             },
//             {
//                 test: /\.s?css$/,
//                 loader: ExtractTextPlugin.extract(
//                     pr(CONFIG.build.node_modules, 'style-loader'),
//                     [
//                         pr(CONFIG.build.node_modules, "css-loader?root=") + CONFIG.app.root, 
//                         pr(CONFIG.build.node_modules, 'resolve-url-loader'), 
//                         pr(CONFIG.build.node_modules, 'sass-loader')
//                     ]
//                 )
//             }
//         ]
//     },
//     sassLoader: {
//         includePaths: CONFIG.app.root
//     },
//     output: CONFIG.output,
//     plugins: [
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
//             'GLOBALS': JSON.stringify(CONFIG.globals)
//         }),
//         new ExtractTextPlugin("bundle.css"),
//     ]
// };
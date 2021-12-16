const Webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const paths = require('./paths')
const { templates } = require('./templates')

module.exports = {
  entry: [paths.src + '/index.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
    assetModuleFilename: 'src/images/[name].[ext]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/images',
          to: 'images',
        },
      ],
    }),
    ...templates.map((template) => new HtmlWebpackPlugin(template)),
    new ESLintPlugin({
      files: ['src/scripts/*.js'],
    }),
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  resolve: {
    alias: {
      '~': paths.src,
    },
  },
}

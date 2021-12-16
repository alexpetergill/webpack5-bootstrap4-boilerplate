const Webpack = require('webpack')
const { merge } = require('webpack-merge')
const StylelintPlugin = require('stylelint-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: ['./src/**/*'],
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new StylelintPlugin({
      files: ['**/*.s?(a|c)ss'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
})

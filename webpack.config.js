/* eslint-disable import/no-extraneous-dependencies, object-property-newline */
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');


module.exports = {

  // Entry Points of the application
  // Commented entry points are being imported in app.js
  entry: [
    // 'font-awesome-loader',
    // 'bootstrap-loader',
    // 'tether',
    './src/scripts/app',
  ],

  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'js/bundle.js',
  },

  resolve: { extensions: ['*', '.js'] },

  plugins: [
    new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true }),
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    Tether: "tether",
    "window.Tether": "tether",
    Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
    Button: "exports-loader?Button!bootstrap/js/dist/button",
    Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
    Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
    Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
    Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
    Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
    Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    Util: "exports-loader?Util!bootstrap/js/dist/util",
  }),
    new webpack.LoaderOptionsPlugin({
      postcss: [autoprefixer],
    }),
  ],

  module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader', use: 'css-loader!postcss-loader',
      }) },
      { test: /\.scss$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader',
      }) },

      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // use: "url?limit=10000"
        use: 'url-loader?name=./fonts/[hash].[ext]',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?name=./fonts/[hash].[ext]',
      },

      // Use one of these to serve jQuery for Bootstrap scripts:

      // Bootstrap 4
      // { test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery' },
    ],
  },
};

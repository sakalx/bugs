const path = require('path');
const webpack = require('webpack');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const {GenerateSW} = require('workbox-webpack-plugin');

// Folders:
const development = 'src';
const production = 'public';

const SRC_DIR = path.join(__dirname, development);
const DIST_DIR = path.join(__dirname, production);

module.exports = (env, argv = {}) => {
  const isProd = argv.mode === 'production';

//============================================================
  // Select source map:
  const sourceMap = isProd ? 'nosources-source-map' : 'eval-source-map';

  //============================================================
  // Loaders configs
  const htmlConfig = {
    loader: 'html-loader',
    options: {minimize: isProd},
  };

  const imgDev = {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'static/img/',
    },
  };
  const imgProd = [
    imgDev,
    {
      loader: 'image-webpack-loader',
      options: {
        optipng: {optimizationLevel: 7},
        pngquant: {quality: '65-90', speed: 4},
        mozjpeg: {progressive: true, quality: 65},
      },
    },
  ];
  const imgConfig = isProd ? imgProd : imgDev;

//============================================================
  // Plugins:
  const progressPlugin = new webpack.ProgressPlugin();

  const cleanProdFolder = new CleanWebpackPlugin();

  const htmlIndex = new HtmlWebpackPlugin({
    template: path.join(__dirname, development, 'index.html'),
    inject: 'body',
    filename: 'index.html',
  });

  const favicon = new FaviconWebpackPlugin({
    logo: `./${development}/static/favicon/logo.png`,
    prefix: 'favicon/',
    emitStats: false,
    inject: true,
    background: '#000',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: true,
      twitter: false,
      yandex: false,
      windows: true,
    },
  });

  const pwaManifest = new WebpackPwaManifest({
    name: 'Serhii Sakal',
    short_name: 'Sakal',
    description: 'Personal page, Serhii Sakal.',
    background_color: '#000',
    theme_color: '#000',
    start_url: '/',
    icons: [
      {
        src: path.resolve(`./${development}/static/favicon/logo.png`),
        sizes: [120, 152, 167, 180, 1024],
        destination: path.join('icons', 'ios'),
        ios: true,
      },
      {
        src: path.resolve(`./${development}/static/favicon/logo.png`),
        size: 1024,
        destination: path.join('icons', 'ios'),
        ios: 'startup',
      },
      {
        src: path.resolve(`./${development}/static/favicon/logo.png`),
        sizes: [36, 48, 72, 96, 144, 192, 512],
        destination: path.join('icons', 'android'),
      },
    ],
  });

//============================================================
  // Webpack config
  return {
    devtool: sourceMap,

    entry: {
      main: SRC_DIR + '/index',
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: DIST_DIR + '/',
      sourceMapFilename: '[file].map',
    },

    module: {
      rules: [
        // HTML - loader
        {
          test: /\.html$/,
          include: SRC_DIR,
          use: htmlConfig,
        },
        // CSS - loader
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // JS babel - loader
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, `${development}`),
          ],
          use: 'babel-loader',
        },
        // IMG - loader
        {
          test: /\.(jpg|png)$/,
          include: path.resolve(__dirname, `${development}/static/img`),
          use: imgConfig,
        },
        // SVL - loader
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
          include: path.resolve(__dirname, `${development}/static/svg`),
        },
      ],
    },

    // Webpack dev server
    devServer: {
      //https: true
      port: 3000,
      open: true,
      contentBase: [SRC_DIR],
      compress: true,
      historyApiFallback: true,
    },

    // Shortcuts
    resolve: {
      alias: {
        'root': path.resolve(__dirname, development),
      },
    },

    plugins: isProd
        ? [
          progressPlugin,
          cleanProdFolder,
          favicon,
          htmlIndex,
          pwaManifest,
          new GenerateSW(),
        ]
        : [
          progressPlugin,
          htmlIndex,
        ],
  };
};
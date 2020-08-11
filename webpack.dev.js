const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const projectRoot = process.cwd();

const srcFolderFromRoot = projectRoot + '/src';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: '8001',
    open: true,
    proxy: {
      '**/api/**/**/*': {
        target: 'http://localhost:9090',
        logLevel: 'debug',
        changeOrigin: true
      }
    }
  }
});

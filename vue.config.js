module.exports = {
  runtimeCompiler: true,
  lintOnSave: true,
  publicPath: '',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
  },
  devServer: {
    proxy: {
      'adresser/v1': {
        target: process.env.VUE_APP_API_BASE_URL,
        changeOrigin: process.env.VUE_APP_USE_DEV_PROXY,
      },
    },
  },
};

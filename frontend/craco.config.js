const { addAfterLoader, loaderByName } = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the source-map-loader rule
      const sourceMapLoaderRule = webpackConfig.module.rules.find(
        (rule) => rule.enforce === 'pre' && rule.use && rule.use.loader.includes('source-map-loader')
      );

      // Modify the rule to exclude lucide-react
      if (sourceMapLoaderRule) {
        sourceMapLoaderRule.exclude = /node_modules\/lucide-react/;
      }

      return webpackConfig;
    },
  },
};
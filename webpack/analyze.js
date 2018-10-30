const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./web');

module.exports = merge(config, {
    mode: 'production',
    stats: {
        errors: true,
        errorDetails: true
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: true
        })
    ]
});

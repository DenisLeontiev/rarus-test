const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    watch: true,
    mode: 'none',
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};

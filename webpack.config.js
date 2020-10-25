module.exports = {
    watch: true,
    mode: 'none',
    output: {
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
};

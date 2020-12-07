const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                    ],
                    "plugins": [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },

        ]
    }
}
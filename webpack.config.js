const path = require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        library: 'banner',
        libraryTarget: 'commonjs'
    },
    externals: {
        react: "React"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
// libs
const path = require('path');

let sourcePath = path.join(__dirname, 'src');
let biuldPath = path.join(__dirname, 'lib');
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        library: 'banner',
        libraryTarget: 'commonjs'
    },
    // externals: {
    //     react: "React"
    // },
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
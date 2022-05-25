const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        weather: './src/modules/weather.js',
        dom: './src/modules/dom.js',
        utils: './src/modules/utils.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        //clean: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {            
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
    },
    module:{
        rules:[    
        {
            test:/\.scss$/,
            exclude: /node_modules/,
            use:['style-loader','css-loader','sass-loader'],
        },
        ]
    }
  });
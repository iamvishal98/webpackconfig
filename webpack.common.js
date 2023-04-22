const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    entry:{
        bundle:path.resolve(__dirname,'src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name][contenthash].js',
        clean:true,
        publicPath: '/',
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            resolve: {
                extensions: [".js", ".jsx"]
              },
            use: {
              loader: 'babel-loader'
            }
          },
        ]
      },

    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname,'public/index.html')
        }),
        new CleanWebpackPlugin(),
      ],


}



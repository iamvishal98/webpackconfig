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


//Loaders are transformations that are applied to the source code of a module. They allow you to pre-process files as you import or “load” them. Thus, loaders are kind of like “tasks” in other build tools and provide a powerful way to handle front-end build steps

//Plugins work at bundle or chunk level and usually work at the end of the bundle generation process. Plugins can also modify how the bundles themselves are created.

// clean:true

//This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS

//simplifies creation of HTML files to serve your webpack bundles.

//this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
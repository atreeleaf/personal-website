const path = require('path')

module.exports = {
  entry:'./src/client/index.jsx',
  watch: true,
  output: {
    path: path.join(__dirname,'/src/client'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?/, 
        exclude: /(node_modules)/, 
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
          }
        }
    },
    {
      test: /\.scss$/,
      use: [
          "style-loader",
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }

    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: path.join(__dirname,"./src/client"),
    hot: true
  }
  // mode: process.NODE_ENV,
  // devServer: {
  //  publicPath: '/build/',
  //  proxy:{
  //    '/api' : 'http://localhost:3000'
  //  }
  // }
  
}
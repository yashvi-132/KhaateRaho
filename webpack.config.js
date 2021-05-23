const path = require('path')

module.exports={
entry: ['./src/index.js'],
output:{
      path: path.resolve(__dirname, 'src'),
      filename: 'js/bundle.js'
},
devServer:{
    contentBase: './src'
},
module:{
    rules:[
        {
            test: /\.js$/, //check for all file with .js
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }

        }
    ]
}
}
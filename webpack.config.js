const path=require("path");
const { pathToFileURL } = require("url");
module.exports={
    mode:"production",
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    },
    devServer:{
        static:"./dist"
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}
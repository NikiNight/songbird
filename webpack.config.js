const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, options) => {

    const isProduction = options.mode === "production";

    const config = {
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",
        watch: isProduction ? false : true,
        entry: ["./src/index.js", './src/scss/main.scss'],
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index_bundle.js"
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }, {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                hash: true,
                filename: "index.html",  //target html
                template: "src/index.html" //source html
            }),
            new MiniCssExtractPlugin({ filename: 'style.css' })
        ]
    }
    
    return config;
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports={
    //Режим проекта и точка входа
    mode: 'development',
    entry: {
        main: path.resolve(__dirname,'./src/index.jsx'),
    },
    optimization: {
        runtimeChunk: 'single',
    },
    stats: {
        children: true,
    },
    //Настройки сервера
    devServer: {
        watchFiles: [path.resolve(__dirname,"src")],
        historyApiFallback: true,
        port:3000,
        hot:true,
    },
    //Выходной main файл
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname,'docs')
    },
    resolve: {
        extensions: ['.ts', '.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                //Компиляция обработка scss и css
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'resolve-url-loader', {
                    loader: 'sass-loader',
                    options: {
                        additionalData: '@import "src/style.scss";',
                        sourceMap: true,
                    }
                }, 'postcss-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'./public/index.html'),
        favicon: path.resolve(__dirname,'./public/favicon.ico')
    }),
        new CleanWebpackPlugin()
    ]
};
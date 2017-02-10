module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "lib/index.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: [/\.js$/, /\.jsx$/], loaders: ['react-hot-loader', 'babel-loader'] },
        ]
    }
};

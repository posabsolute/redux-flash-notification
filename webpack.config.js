module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "es5/index.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css" },
            { test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader?stage=0&loose[]=es6.modules'] },
            { test: /\.jsx$/, loaders:['react-hot-loader', 'babel-loader?stage=0&loose[]=es6.modules'] }
        ]
    }
};
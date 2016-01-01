module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "es5/index.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loaders: ['react-hot', 'babel?stage=0&loose[]=es6.modules'] },
            { test: /\.jsx$/, loaders:['react-hot', 'babel?stage=0&loose[]=es6.modules'] }
        ]
    }
};
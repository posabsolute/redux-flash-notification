module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "es5/index.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                'loader': 'style-loader'
            }, {
                'loader': 'css'
            }] },
            { test: /\.js$/, use: ['react-hot-loader', 'babel-loader?stage=0&loose[]=es6.modules'] },
            { test: /\.jsx$/, use:['react-hot-loader', 'babel-loader?stage=0&loose[]=es6.modules'] }
        ]
    }
};
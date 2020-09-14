const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src/index.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}
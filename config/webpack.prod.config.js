const path = require('path')

module.exports = {
    mode: 'production',
    entry: './package/index.js',    // 入口文件
    output: {
        filename: "index.js",
        path: path.join(__dirname, '../lib'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: [
                    path.join(__dirname, 'package')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}

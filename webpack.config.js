const path = require('path');

module.exports = {
    entry: './src/index.ts',
    types: "./dist/types/index.d.ts",// 需要与types文件的路径一致
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};
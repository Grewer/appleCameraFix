const path = require('path')

module.exports = [{
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    plugins: [],
    entry: {
        index: './cameraRepair.ts'
    },
    output: {
        filename: 'cameraRepair.js',
        path: path.resolve(__dirname, 'build'),
        library: 'cameraRepair',
        libraryTarget: 'commonjs-module',
        libraryExport: "default",
    }
}, {
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    plugins: [],
    entry: {
        index: './cameraRepair.ts'
    },
    output: {
        filename: 'cameraRepair.browser.js',
        path: path.resolve(__dirname, 'build'),
        library: 'cameraRepair',
        libraryTarget: 'window',
        libraryExport: "default",
    }
}]

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/PasswordStrength.tsx',
  output: {
    path: path.resolve('lib'),
    filename: 'pwstrength.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(ts|tsx)?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                "css-loader"
            ],
            exclude: /\.module\.css$/,
        },
        {
            test: /\.module\.css$/,
            use: [
                'style-loader',
                "@teamsupercell/typings-for-css-modules-loader",
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: true
                    }
                }
            ]
        },
        {
            test: /\.(svg)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        encoding: false
                    },
                },
            ],
        }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
},
  externals: {
    // Don't bundle react or react-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
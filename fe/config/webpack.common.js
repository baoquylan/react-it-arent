module.exports = {
    resolve: {
        extensions: [".jsx", ".js", ".json", ".css", ".scss", ".jpg", ".jpeg", ".png"],
        fallback: {
            'react/jsx-runtime': 'react/jsx-runtime.js',
            'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        filename: 'static/js/[name].[contenthash:8].js',
                    },
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              },
        ],
    },
};

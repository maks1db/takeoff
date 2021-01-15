import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';

import { useCss, useSass } from './partials/loaders';

export default {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: useCss(false),
            },
            {
                test: /\.scss$/,
                use: useSass(false),
            },
        ],
    },
    target: ['es5', 'web'],
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
        }),
    ],
} as Configuration;

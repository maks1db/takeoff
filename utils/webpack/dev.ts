import { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { useCss, useSass } from './partials/loaders';

export default {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: useCss(),
            },
            {
                test: /\.scss$/,
                use: useSass(),
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
} as Configuration;

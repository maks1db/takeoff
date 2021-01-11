import { Configuration } from 'webpack';

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
} as Configuration;

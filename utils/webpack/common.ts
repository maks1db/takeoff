import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const dir = process.cwd();

export default {
    entry: ['regenerator-runtime/runtime', `${dir}/src/index.tsx`],
    output: {
        filename: 'assets/js/bundle.js',
        path: `${dir}/public/`,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Скворцов М.М. - демо',
            template: 'src/template/template.html',
            filename: 'index.html',
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.(ts|tsx)$/,
            },

        ],
    },
} as Configuration;

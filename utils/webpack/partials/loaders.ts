import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface CssLoadersProps {
    isDev?: boolean;
    enableCssModules?: boolean;
}

export const prepareBaseCssLoaders = (props?: CssLoadersProps) =>
    [
        props?.enableCssModules && {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[name]-[local]--[hash:base64:5]',
                },
            },
        },
        !props?.enableCssModules && 'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        autoprefixer({
                            overrideBrowserslist: 'last 3 versions, > 1%',
                        }),
                        props?.isDev && cssnano,
                    ].filter(Boolean),
                },
            },
        },
    ].filter(Boolean);

const styleLoader = (isDev = true) =>
    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader);

export const useCss = (isDev = true) => [
    styleLoader(isDev),
    ...prepareBaseCssLoaders({ isDev }),
];
export const useSass = (isDev = true) => [
    styleLoader(isDev),
    ...prepareBaseCssLoaders({ isDev, enableCssModules: true }),
    'sass-loader',
];

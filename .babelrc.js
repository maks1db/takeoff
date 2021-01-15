const enableReactRefresh = process.env.NODE_ENV === 'development';

const presets = [
    '@babel/preset-typescript',
    '@babel/preset-env',
    '@babel/preset-react',
];

module.exports = {
    presets,
    plugins: [enableReactRefresh && 'react-refresh/babel'].filter(Boolean),
};

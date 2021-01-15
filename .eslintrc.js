const namingConventions = [
    {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase'],
    },
    {
        selector: 'typeLike',
        format: ['PascalCase'],
    },
    {
        selector: 'property',
        filter: '^__.*$',
        format: null,
        leadingUnderscore: 'allow',
    },
    {
        selector: 'parameterProperty',
        format: ['camelCase', 'PascalCase'],
        filter: {
            regex: '[- ]',
            match: false,
        },
    },
];

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    globals: {
        __dirname: true,
        browser: true,
        'jest/globals': true,
        page: true,
        process: true,
    },
    plugins: ['react', 'jest', 'import', 'json', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'airbnb',
    ],
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                '@typescript-eslint/triple-slash-reference': 'off',
                'spaced-comment': 'off',
                camelcase: 'off',
            },
        },
        {
            files: [
                '*.test.ts',
                '*.test.tsx',
                'jestsetup.ts',
                'createWithTheme.tsx',
                '*.stories.tsx',
            ],
            rules: {
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                'import/no-unresolved': 'off',
                'jest/no-mocks-import': 'off',
                'max-len': 'off',
                'no-bitwise': 'off',
            },
        },
        {
            files: ['*.icon.tsx', 'icons.tsx'],
            rules: {
                'max-len': 'off',
            },
        },
        {
            files: ['index.ts'],
            rules: {
                'import/named': 'off',
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
                'no-empty-function': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                    },
                ],
                'no-unused-expressions': 'off',
            },
        },
    ],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/naming-convention': ['error'].concat(namingConventions),
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'comma',
                    requireLast: true,
                },
                overrides: {
                    interface: {
                        multiline: {
                            delimiter: 'semi',
                            requireLast: true,
                        },
                    },
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'consistent-return': [
            'error',
            {
                treatUndefinedAsUnspecified: false,
            },
        ],
        'func-names': [
            'error',
            'as-needed',
            {
                generators: 'never',
            },
        ],
        'jest/expect-expect': [
            'error',
            {
                assertFunctionNames: ['expect', 'expectSaga'],
            },
        ],
        'implicit-arrow-linebreak': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': [
            'error',
            {
                amd: true,
                commonjs: true,
            },
        ],
        'import/prefer-default-export': 'off',
        indent: ['error', 4],
        'max-len': [
            'error',
            {
                code: 120,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                ignorePropertyModificationsFor: ['state'],
                props: true,
            },
        ],
        'no-return-assign': 'off',
        'no-template-curly-in-string': 'off',
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
            },
        ],
        'no-useless-escape': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/sort-comp': [
            'error',
            {
                order: [
                    'instance-variables',
                    'static-methods',
                    'lifecycle',
                    'render',
                    'everything-else',
                ],
            },
        ],
        'react/state-in-constructor': ['error', 'never'],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                labelComponents: ['CustomInputLabel'],
                labelAttributes: ['label'],
                controlComponents: ['CustomInput'],
                depth: 3,
            },
        ],
        'react/no-danger': 'off',
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            },
        },
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};

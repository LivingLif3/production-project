module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'standard-with-typescript'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'no-used-vars': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        '@typescript-eslint/no-unused-vars': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
}

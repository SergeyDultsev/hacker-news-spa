module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2024: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-unused-vars': ['warn', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
        }],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
    },
};
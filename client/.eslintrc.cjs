/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        // './.eslintrc-auto-import.json',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'comma-dangle': [ 'warn', {
            "arrays": "always",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never",
        },],
        'no-unused-vars': 'warn',
        'no-undef': 'off',
        'vue/multi-word-component-names': 'off',
        // enforce 4 spaces per tab
        'indent': [ 'warn', 4, ],
        'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false, },],
        '@typescript-eslint/no-unused-vars': 'warn',
        // allow tabs for indentation
        'vue/html-indent': [ 'error', 4, ],
        semi: [ 'warn', 'always', ],
        'vue/attributes-order': 'off',
    },
};

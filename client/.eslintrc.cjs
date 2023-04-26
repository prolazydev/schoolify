/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution',);

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
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'warn',
        'comma-dangle': [ 'warn', 'always', ],
        'no-unused-vars': 'warn',
        // enforce 4 spaces per tab
        indent: [ 'warn', 4, ],
        'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false, },],
        '@typescript-eslint/no-unused-vars': 'warn',
        // allow tabs for indentation
        'vue/html-indent': [ 'error', 4, ],
        semi: [ 'error', 'always', ],
        'vue/attributes-order': [ 'error', {
            order: [
                'EVENTS',
                'DEFINITION',
                'OTHER_DIRECTIVES',
                'CONTENT',
                'OTHER_ATTR',
                'LIST_RENDERING',
                'CONDITIONALS',
                'TWO_WAY_BINDING',
                'RENDER_MODIFIERS',
                [ 'UNIQUE', 'SLOT', ],
                'GLOBAL',
            ],
            alphabetical: false,
        },],
    },
};

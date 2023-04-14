module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        // 'plugin:nuxt/recommended'
    ],
    plugins: [
        'vue',
    ],
    // add your custom rules here
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
    },
}

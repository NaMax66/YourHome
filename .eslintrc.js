module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 1 }],
    'vue/multi-word-component-names': ['error', {
      ignores: ['default']
    }]
  }
}

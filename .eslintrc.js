module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    'max-len': [
      'error',
      {
        'code': 120,
        'tabWidth': 2,
      }
    ],
    'no-console': process.env.VUE_APP_NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.VUE_APP_NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'new-cap': 'off',
    'func-names': 'off',
    'no-param-reassign': [
      'error',
      { 'props': true,
        'ignorePropertyModificationsFor':
          [
            'state',
          ],
      },
    ],
    'no-shadow': [
      'error',
      { 'allow': [ 'state', 'getters' ] },
    ],
    'prefer-promise-reject-errors': 'off',
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true,
      }
    ],
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/eqeqeq': 'error',
    'vue/match-component-file-name': 'error'
  },

  globals: {
    process: true,
    _: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        quotes: [2, 'single'],
      },
      globals: {
        jest: true,
        expect: true,
        mockFn: true,
        config: true,
        afterEach: true,
        beforeEach: true,
        afterAll: true,
        beforeAll: true,
        describe: true,
        it: true,
        runs: true,
        waitsFor: true,
        pit: true,
        require: true,
        xdescribe: true,
        xit: true,
      },
    },
  ],
};

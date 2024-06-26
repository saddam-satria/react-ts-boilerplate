module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
      'plugin:testing-library/dom',
      'plugin:testing-library/react',
      'eslint:recommended', 
      'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    resolve:{
       alias:{
        "@":"./src"
       }
    }, 
    plugins: ['react', 'react-hooks', 'testing-library',"@typescript-eslint", 
    "eslint-plugin-import"
  ],
    rules: {
      'arrow-body-style': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-deprecated': 'warn',
      'react/jsx-filename-extension': 'off',
      'react/no-unknown-property': 'warn',
      'react/require-render-return': 'warn',
      'react/jsx-key': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/function-component-definition': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/no-array-index-key': 'off',
      'react/prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'react/self-closing-comp': 'off',
      'react/button-has-type': 'off',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'off',
      'comma-dangle': ['off', 'never'],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'no-console': 'off',
      'no-duplicate-imports': 'warn',
      'no-unused-vars': 'warn',
      'import/order': [
        'warn',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            'builtin',
            'external',
            'index',
            'sibling',
            'parent',
            'internal',
          ],
        },
      ],
      'jsx-quotes': ['warn', 'prefer-double'],
      'object-curly-spacing': ['warn', 'always'],
      'import/prefer-default-export': 'off',
      'no-underscore-dangle': 'off',
      'default-param-last': 'off',
      radix: 'off',
      "import/extensions" :"off",
      "import/no-unresolved": "off",
      "react/react-in-jsx-scope": "off",
      "no-param-reassign": "off",
      "react-hooks/exhaustive-deps": "warn"
    },
    settings: {
      react: {
        version: 'detect',
      },
      "import/resolver":{
        "alias":{
          map:[["@", "./src"]]
        }
      }
    },
};
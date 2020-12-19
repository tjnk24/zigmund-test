module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-unused-vars': 'warning',
        'import/no-dynamic-require': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ]
            }
        ],
    }
};

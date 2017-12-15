/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "November 19th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: INSERT PROJECT NAME!
 * @Filename: .eslintrc.js
 * @Last modified by:   JDure
 * @Last modified time: "December 14th 2017"
 */



module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};

// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: '14.20' } }],
      '@babel/preset-typescript',
    ],
};
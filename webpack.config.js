const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    contentScript: './src/contentScript.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader', // This handles SVG files
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '.' },
        { from: 'public/*.html', to: '[name][ext]' },
        { from: 'public/*.png', to: '[name][ext]' },
        { from: 'public/*.css', to: '[name][ext]' },
      ],
    }),
  ],
};

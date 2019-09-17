const path = require('path')
const { WebpackPluginServe } = require('webpack-plugin-serve')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const truthy = (...args) => args.filter(Boolean)

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const isDev = mode === 'development'

const outputPath = path.resolve(__dirname, 'dist/client')

module.exports = {
  mode,
  entry: truthy(
    path.resolve(__dirname, 'src/client/client.tsx'),
    isDev && 'webpack-plugin-serve/client',
  ),
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // Babel will handle TS compilation, see .babelrc.js
        use: 'babel-loader',
      },
    ],
  },
  plugins: truthy(
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    isDev &&
      new WebpackPluginServe({
        host: '127.0.0.1',
        port: 3000,
        liveReload: true,
        historyFallback: true,
        static: [outputPath, path.join(__dirname, 'public')],
        middleware: (app, builtins) => {
          if (isDev) {
            // API server runs on port 3001 in dev, 3000 in prod
            app.use(builtins.proxy('/api', { target: 'http://localhost:3001' }))
          }
        },
      }),
  ),
  watch: isDev,
}

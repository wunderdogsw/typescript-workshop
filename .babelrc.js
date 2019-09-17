const isClient = process.env.BUILD_TYPE === 'client'
const program = isClient ? 'client' : 'server'

const truthy = (...args) => args.filter(arg => arg)

module.exports = {
  presets: truthy(
    isClient && [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-typescript',
    isClient && '@babel/preset-react',
  ),
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': `./dist/${program}`,
        },
      },
    ],
  ],
}

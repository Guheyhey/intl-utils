import babel from 'rollup-plugin-babel'

const loose = true

const babelSetup = {
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false, loose }]],
  exclude: 'node_modules/**',
}

const ensureArray = maybeArr => Array.isArray(maybeArr) ? maybeArr : [maybeArr]

const createConfig = ({ input, output, env } = {}) => {
  const plugins = [
    babel(babelSetup),
  ]

  return {
    input,
    plugins,
    output: ensureArray(output).map(format =>
      Object.assign(
        {},
        format,
      )
    ),
  }
}

export default [
  createConfig({
    input: 'src/formatDateText.js',
    treeshake: false,
    output: {
      file: 'dist/formatDateText.js',
      format: 'umd',
      name: 'formatDateText',
    },
  }),
  createConfig({
    input: 'src/formatPriceText.js',
    treeshake: false,
    output: {
      file: 'dist/formatPriceText.js',
      format: 'umd',
      name: 'formatPriceText',
    },
  }),
]

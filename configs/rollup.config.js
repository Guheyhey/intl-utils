import {
  babelSetup,
  banner,
  name,
  uglifyOutput,
  version,
} from '../configs/config'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import pkg from '../package.json'

const ensureArray = maybeArr => Array.isArray(maybeArr) ? maybeArr : [maybeArr]

const createConfig = ({ input, output, env } = {}) => {
  const plugins = [
    babel(babelSetup),
    replace({ 'VERSION': JSON.stringify(version).replace(/"/g, '') }),
  ]

  if (env === 'production') plugins.push(uglify(uglifyOutput))

  return {
    input,
    plugins,
    output: ensureArray(output).map(format =>
      Object.assign(
        {},
        format,
        {
          banner,
          name,
        }
      )
    ),
  }
}

export default [
  createConfig({
    input: 'test/index.js',
    output: {
      file: 'dist/intl-utils.js',
      format: 'cjs',
    },
  }),
  createConfig({
    input: 'test/index.js',
    output: {
      file: 'dist/intl-utils.min.js',
      format: 'umd',
    },
    env: 'production',
  }),
]
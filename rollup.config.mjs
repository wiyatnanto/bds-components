import resolve, { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { babel } from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import copy from 'rollup-plugin-copy'
import alias from 'rollup-plugin-alias'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      nodeResolve({
        extensions: ['.css', '.scss']
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extensions: ['.css', '.scss'],
        minimize: true,
        inject: {
          insertAt: 'top'
        },
        extract: true
      }),
      copy({
        targets: [
          {
            src: './src/assets/webfonts/*',
            dest: './dist/assets/webfonts/'
          }
        ]
      }),
      terser(),
      babel({ babelHelpers: 'bundled' }),
      image(),
      alias({
        entries: [{ find: 'index.css', replacement: './dist/cjs/index.css' }]
      })
    ],
    external: [
      'react',
      'react-slick',
      '@types/react-slick',
      'swiper',
      'swiper/css/bundle',
      'swiper/css/effect-fade'
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(sc|sa|c)ss$/]
  }
]

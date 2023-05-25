import * as esbuild from 'esbuild'

const result = await esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  outdir: 'dist',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  minify: true
})

console.log(result)
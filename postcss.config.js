module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: "_" }),
    require('tailwindcss'),
    require('cssnano')({
      preset: 'default'
    }),
    require('postcss-fail-on-warn'),
    require('autoprefixer')({
      browsers: [
        '> 1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })
  ]
}
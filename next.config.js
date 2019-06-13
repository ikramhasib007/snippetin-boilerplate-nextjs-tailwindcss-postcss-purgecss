const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "pastcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["scss", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config;
  }
}

const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withPurgeCss = require('next-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = withCSS(withSass(withImages(withPurgeCss({
  purgeCss: {
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ["html", "js", "css"]
      }
    ]
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]"
  },
  purgeCssPaths: [
    'pages/**/*',
    'src/**/*'
  ]
}))))
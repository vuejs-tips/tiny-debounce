module.exports = {
  webpack: {
    devtool: false, // disable source-map
    output: {
      publicPath: '', // generate client.*.js relative to ./docs/index.html
    }
  }
}

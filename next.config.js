const withTs = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
module.exports = withTs(withSass())

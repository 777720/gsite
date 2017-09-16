var fs = require('fs')
var path = require('path')
var _ = require('lodash')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var entryDir = path.join(__dirname, 'src/entry/')
var templateFile = path.join(
  __dirname,
  'template/entry.ejs'
)

function addEntryFn(config, key, value) {
  console.log('寻找入口..., key=' + key + ',value=' + value)
  config.entry[key] = value
  config.plugins.push(
    new HtmlWebpackPlugin({
      title: key,
      chunks: ['manifest', 'vendor', key],
      filename: key + '.html',
      template: templateFile,
    })
  )
}

function getEntrys(config, rootPath, fn) {
  var files = fs.readdirSync(rootPath)
  for (var key in files) {
    var fullName = path.join(rootPath, '/', files[key])
    var stat = fs.lstatSync(fullName)
    if (stat.isDirectory() === true) {
      getEntrys(config, fullName, fn)
    } else {
      var fileName = path.basename(fullName, '.jsx')
      if (_.startsWith(fileName, 'entry-') === true) {
        var entryKey = fileName.replace('entry-', '')
        fn(config, entryKey, fullName)
      }
    }
  }
}

module.exports = function(config) {
  getEntrys(config, entryDir, addEntryFn)
}

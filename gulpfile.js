const uglify = require('gulp-uglify')
const { src, dest, watch, series } = require('gulp')
const gulpBabel = require('gulp-babel')
const pump = require('pump')
const insert = require('gulp-insert')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

const jsSrcDir = 'src/inline-scripts/**/*.js'
const outputDir = 'src/hugo/layouts/partials/built'
const outputFilename = 'inline-script.html'

function jsToHtmlPartial (cb) {
  return pump(
    src(jsSrcDir),
    gulpBabel({ presets: ['@babel/env'] }),
    concat('necessary-filename.js'),
    uglify(),
    insert.wrap('<script>', '</script>'),
    rename(outputFilename),
    dest(outputDir),
    cb
  )
}

function watchJs (cb) {
  watch(jsSrcDir, jsToHtmlPartial)
}

exports.build = jsToHtmlPartial
exports.watch = series(jsToHtmlPartial, watchJs)

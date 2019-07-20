const uglify = require('gulp-uglify')
const { src, dest } = require('gulp')
const gulpBabel = require('gulp-babel')
const pump = require('pump')
const insert = require('gulp-insert')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

const srcDir = 'src/inline-scripts/**/*.js'
const outputDir = 'src/hugo/layouts/partials/built'
const outputFilename = 'inline-script.html'

function jsToHtmlPartial () {
  return pump(
    src(srcDir),
    gulpBabel({ presets: ['@babel/env'] }),
    concat('necessary-filename.js'),
    uglify(),
    insert.wrap('<script>', '</script>'),
    rename(outputFilename),
    dest(outputDir)
  )
}

exports.jsToHtmlPartial = jsToHtmlPartial

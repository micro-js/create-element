/**
 * Modules
 */

var isSvg = require('@f/is-svg')
var svgNs = require('@f/svg-namespace')

/**
 * Expose createElement
 */

module.exports = createElement

/**
 * createElement
 */

function createElement (tag) {
  return isSvg(tag)
    ? document.createElementNS(svgNs, tag)
    : document.createElement(tag)
}

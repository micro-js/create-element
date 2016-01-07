/**
 * Imports
 */

var htmlNs = require('@f/html-namespace')
var svgNs = require('@f/svg-namespace')
var createElement = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var div = createElement('div')
  t.equal(div.namespaceURI, htmlNs)

  var tspan = createElement('tspan')
  t.equal(tspan.namespaceURI, svgNs)

  t.end()
})

'use strict'

var test = require('tape')
var Observ = require('observ')
var isObserv = require('./')

test(function (t) {
  t.ok(isObserv(Observ()))
  t.end()
})

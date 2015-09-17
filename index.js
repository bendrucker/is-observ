'use strict'

module.exports = function isObserv (value) {
  return typeof value === 'function' && typeof value.set === 'function'
}

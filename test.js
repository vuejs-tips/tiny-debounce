const assert = require('assert')
const debounce = require('./')

{
  "It debounces properly";
  let called = 0
  let debounced = debounce(function() {
    ++called
  }, 50)

  debounced()
  debounced()

  setTimeout(debounced, 40)

  setTimeout(function() {
    if (called !== 1) {
      throw new Error()
    }
  }, 100)
}

{
  "it provides latest parameter to callback";
  let called = 0
  let debounced = debounce(function(parameter) {
    ++called
    assert(parameter === 3)
  }, 50)

  debounced(1)
  debounced(4)
  debounced(3)

  setTimeout(function() {
    assert(called === 1)
  }, 60)
}

{
  "provides proper this value";
  let called = 0
  let that = {something: true}
  let debounced = debounce(function() {
    assert(this === that)
    ++called
  }, 50)
  debounced.call(that)
  setTimeout(function() {
    assert(called === 1)
  }, 60)
}

{
  "calls using the latest this";
  let called = 0
  let that = {something: true}
  let debounced = debounce(function() {
    assert(this === that)
    ++called
  }, 50)
  debounced.call({})
  debounced.call({})
  debounced.call({})
  debounced.call(that)
  setTimeout(function() {
    assert(called === 1)
  }, 60)
}

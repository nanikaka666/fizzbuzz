'use strict'

const { strictEqual} = require('assert')
const f = require('.')

strictEqual(f(1), '1')
strictEqual(f(3), 'Fizz')
strictEqual(f(5), 'Buzz')
strictEqual(f(6), 'Fizz')
strictEqual(f(9), 'Fizz')
strictEqual(f(10), 'Buzz')
strictEqual(f(12), 'Fizz')
strictEqual(f(15), 'FizzBuzz')
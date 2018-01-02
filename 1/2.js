'use strict'

const isPerm = ([s1, s2]) => {
  if (s1.length != s2.length) return false

  const cs1 = {}
  for (let c of s1)
    cs1[c] = cs1[c] ? cs1[c] + 1 : 1

  const cs2 = {}
  for (let c of s2)
    cs2[c] = cs2[c] ? cs2[c] + 1 : 1

  const csa1 = Object.keys(cs1)

  for (let c of csa1)
    if (cs1[c] != cs2[c]) return false

  return true
}

console.log([
  ['', ''],
  ['ab', 'ab'],
  ['ab', 'ba'],
  ['aba', 'baa'],
  ['abc', 'def'],
  ['ab', 'abc'],
  ['ab', 'abc'],
  ['abc', 'ab'],
  ['abf', 'abc'],
  ['aabc', 'abc'],
  ['aabc', 'abcc'],
].map(isPerm))
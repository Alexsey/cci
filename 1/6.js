'use strict'

const compress = s => {
  let i = 0, j = 0, cs = ''
  while (i + j < s.length) {
    while (s[i] == s[i + j]) j++
    cs += s[i] + j
    i += j
    j = 0
  }
  return cs.length < s.length ? cs : s
}

console.log([
  'aabccccaaa'
].map(compress))
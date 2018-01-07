'use strict'

const isOneStepAway = ([s1, s2]) => {
  [s1, s2] = s1.length > s2.length ? [s1, s2] : [s2, s1]
  if (s1.length - s2.length > 1) return false

  let inc = false
  if (s1.length == s2.length) {
    for (let i = 0, j = 0; i < s1.length; i++, j++) {
      if (s1[i] != s2[j]) {
        if (inc) return false
        inc = true
      }
    }
  } else {
    for (let i = 0, j = 0; i < s1.length; i++, j++) {
      if (s1[i] != s2[j]) {
        if (inc) return false
        i++
        inc = true
      }
    }
  }

  return true
}

console.log([
  ['pale', 'pale'],
  ['p', ''],
  ['pale', 'pal'],
  ['pales', 'pale'],
  ['pale', 'bale'],
  ['pale', ''],
  ['pale', 'bike'],
].map(isOneStepAway))
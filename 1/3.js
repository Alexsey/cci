'use strict'

const replace = a => {
    let iei = a.length / 3
    for (let i = a.length - 1; i >= 0; i--) {
        const c = a[i]
        if (c != ' ') {
            iei = i
            break
        }
    }

    let j = a.length - 1
    for (let i = iei; i >= 0; i--) {
        const c = a[i]
        if (c != ' ') {
            a[j--] = c
        } else {
            a[j--] = '0'
            a[j--] = '2'
            a[j--] = '%'
        }
    }
    return a.join('')
}

let s
console.log([
    'I  have some space',
    'no_spaces',
    '   ',
    '',
]
    .map(v => v.split('').concat(v.match(/\s/g)).concat(v.match(/\s/g)))
    .map(replace)
)
'use strict'

const getPerms = s => {
    const cs = {}

    const sis = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') sis.push(i)
    }

    s = s.replace(/ /g, '')

    for (let c of s)
        cs[c] = (cs[c] || 0) + 1

    let oc = ''
    let es = []
    for (let c of Object.keys(cs)) {
        if (cs[c] % 2) {
            if (oc) return false
            oc = c
        } else {
            es.push(c)
        }
    }

    const dict = []
    for (let c of es) {
        cs[c] /= 2
        dict.push(...c.repeat(cs[c]))
    }

    const pols = getHalves(dict)

    const got = {}

    return pols
        .filter(pol => {
            if (got[pol]) return false
            return got[pol] = true
        })
        .map(pol => pol + oc + pol.split('').reverse().join(''))
        .map(pol => {
            for (let si of sis) {
                pol = pol.split('')
                pol.splice(si, 0, ' ')
                pol = pol.join('')
            }
            return pol
        })

    function getHalves (dict) {
        if (dict.length == 1) return dict
        return dict.reduce((r, c, i) => r.concat(
                getHalves([
                    ...dict.slice(0, i),
                    ...dict.slice(i + 1, dict.length)
                ])
                    .map(half => c + half)
            )
        , [])
    }
}

const isPerm = s => {
    s = s.replace(/\s/g, '')
    const cs = {}

    for (let c of s) {
        cs[c] = !cs[c]
    }

    console.log(cs)

    let foundOdd = false
    for (let v of Object.keys(cs)) {
        if (cs[v] && foundOdd) return false
        if (cs[v]) foundOdd = true
    }
    return true
}

console.log([
        'aabbccd',
        'abad b',
        'abc'
    ]
    .map(getPerms)
)

console.log([
        'aabbccd',
        'abad b',
        'abc'
    ]
    .map(isPerm)
)
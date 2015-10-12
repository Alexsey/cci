/*
	Given two strings, write a method to decide if one is a permutation of the other
*/

let isPermutation = (s1, s2) => {
	let cs = {}
	for (let c of s1) {
		cs[c] = cs[c] || 0
		cs[c]++
	}
	for (let c of s2) {
		if (!cs[c]) return false
		cs[c]--
	}
	return Object.keys(cs).every(k => cs[k] == 0)
}
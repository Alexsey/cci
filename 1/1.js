/*
	Implement an algorithm to determine if a string has all unique characters.
	What if you cannot use additional data structures?
 */

let allUniqueSimple = s => {
	let used = new Set()
	return [].every.call(s, char => !used.has(char) && used.add(char))
}

let allUnique = s => {
	for (let i = 0; i < s.length; i++) {
		for (let c2 of s.substr(i + 1)) {
			if (s[i] == c2) return false
		}
	}
	return true
}
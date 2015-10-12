/*
	Implement a method to perform basic string compression using the counts of
	repeated characters. For example, th string aabcccccaaa would become a2b1c5a3.
	If the "compressed" string would not be smaller than the original string, your
	method should return the original string
 */

let compress = s => {
	if (!s || !s.length) return ''
	let r = s[0]
	let j = 1
	for (let i = 1; i < s.length; i++) {
		let c = s[i]
		let pc = s[i - 1]
		if (c == pc) {
			j++
		} else {
			r += j + c
			j = 1
		}
	}
	r += j
	return r.length < s.length ? r : s
}
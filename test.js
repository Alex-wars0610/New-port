let a = 2

console.log(a++) // console.log(a); a = a + 1;
console.log(a++) // console.log(a); a = a + 1;
console.log(++a) // a = a + 1; console.log(a);



let b = 3
console.log(b)
b++
console.log(b)
++b
console.log(b)


let c = 2
let d = 3
let e = c++ + ++d

let f = 4
let g = f++ + ++f + f++
console.log("FG: ", f, g)


a = a + 6
a += 6
a -= 1
a *= 2
a /= 3
a %= 10


let z = true
z &&= false
z = z && false
z ||= true


let x = true
let y = x ? 1 : 2
y = x ?? 2



let aa = 3
let bb = 4
let cc = 5

let dd = aa + --aa
aa += 5
let ee = bb + aa
let ff = bb++ + --cc
bb *= 3
let gg = aa + bb + cc

console.log(aa, bb, cc, dd, ee, ff, gg)
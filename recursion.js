function sumRange(n) {
  if (n === 1) return 1
  return n + sumRange(n-1)
}

console.log(sumRange(3))

function power(base, exp) {
  if (exp === 0) return 1
  return base * power(base, exp - 1)
}

console.log(power(2,4))

function factorial(n) {
  if (n === 1) return 1
  return n * factorial(n-1)
}

console.log(factorial(5))

function cb(n) {
  return n < 7
}

function all(arr, cb) {
  if (arr.length === 0) return true
  for (let i=0; i<arr.length; i++) {
    if (cb(arr[i])) {
      arr.shift()
      return all(arr,cb)
    } else {
      return false
    }
  }
}

console.log(all([1,2,6],cb))

function productArray(arr) {
  if (arr.length === 0) return 1
  for (let i=0; i<arr.length; i++) {
    const first = arr[i]
    arr.shift()
    return first * productArray(arr)
  }
}

console.log(productArray([100,5,2]))

var nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}
function contains(obj, item) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') return contains(obj[key],item)
    if (obj[key] === item) return true
  }
  return false
}

console.log(contains(nestedObject,'foo'))

function totalIntegers(arr) {
	if(arr.length === 0) return 0;

	let total = 0;
	let first = arr.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(arr);
}
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven)

function sumSquares(arr) {
  if (arr.length === 0) return 0
  let total = 0
  for (let value of arr) {
    if (Array.isArray(value)) {
      total += sumSquares(value)
    } else {
      total += value * value
    }
  }
  return total
}

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 1 = 1


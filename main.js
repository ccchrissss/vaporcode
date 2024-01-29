// params: str
// return: str  // turned into vaporwave sentence
// 'Hello there' 
// results in 'H  E  L  L  O  T  H  E  R  E'

// split the string at the spaces
// rejoin the string eliminating the spaces
// split it again
// make each character to upper case
// join with two spaces in between characters
// return the result

function vaporwave(str) {

  let arr = str.split(' ')

  arr = arr.join('').toUpperCase()

  arr = arr.split('')

  // console.log(arr)

  return arr.join('  ')

}
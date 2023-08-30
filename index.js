
  const cats = ["Milo", "Otis", "Garfield"]

  function destructivelyAppendCat(name) {
    cats.push(name)
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name)

  }
function destructivelyRemoveLastCat() {
  cats.pop()
}
function destructivelyRemoveFirstCat() { 
  cats.shift()
}
function appendCat(name) { 
  const newarray = cats.slice()
  newarray.push(name)
  return newarray
}
function prependCat(name) {
  const secarray = cats.slice()
  secarray.unshift(name)
  return secarray
}
function removeLastCat() {
  const thirdarray = cats.slice()
  thirdarray.pop(1) 
  return thirdarray
}
function removeFirstCat() {
  const fourtharray = cats.slice() 
  fourtharray.shift(1)
  return fourtharray
   
}




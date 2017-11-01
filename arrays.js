var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var milkyWay = "foo"


function addElementToBeginningOfArray (chocolateBars, milkyWay){
  return [milkyWay, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, milkyWay){
  chocolateBars.unshift(milkyWay)
  return chocolateBars
}

function addElementToEndOfArray (chocolateBars, milkyWay){
  return [...chocolateBars, milkyWay]
}

function destructivelyAddElementToEndOfArray (chocolateBars, milkyWay){
  return chocolateBars.push(milkyWay)
}

function accessElementInArray (chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray (chocolateBars){
  return chocolateBars.slice(1)
}

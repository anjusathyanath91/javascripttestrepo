let day="Tuesday"
console.log(day.length)
let subday=day.slice(0,4)
console.log(subday)
console.log(day[1])

let splitday=day.split("s")
console.log(splitday[0])
console.log(splitday[1])
//console.log(splitday[2])

let date='23'
let nextdate='27'
let difference=parseInt(nextdate)-parseInt(date)
console.log(difference)

let newquote=day+" is funday"
console.log(newquote)
let val=newquote.indexOf("day")
console.log(val)
let value=newquote.indexOf("day",5)
console.log(value)
let count=0
while(val!==-1){ //to find the count of 'day' in the string
count++
val=newquote.indexOf("day",val+1)
}
console.log(count)
console.log(val)

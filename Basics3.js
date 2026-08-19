var marks=Array(6)
var marks=new Array(20,40,35,10,27,100)
var marks=[20,40,35,10,27,100]
console.log(marks[2])
marks[3]=14 // 3rd element replaced with value 14
console.log(marks)
console.log(marks.length)
marks.push(65)// adds an element at the end of the array
console.log(marks)
marks.pop()//removes the element at the end of the array
console.log(marks)
marks.unshift(12) //adds an element at the begining of the array
console.log(marks)
marks.shift()//removes an element from the begining of the array
console.log(marks)
console.log(marks.indexOf(100)) //index value of the number 100
console.log(marks.includes(100)) //to check whether the element 120 is in the array
let submarks=marks.slice(2,5)//slice() extracts a portion of an array and creates a new array.
console.log(submarks)
//sum of array
let sum=0
for(let i=0;i<marks.length;i++){
console.log(marks[i])
sum=sum+marks[i]
}
console.log(sum)

//sum of array using reduce

let total=marks.reduce((sum,m)=>sum+m,0)
console.log(total)

//average of array using reduce
let average=marks.reduce((avg,m)=>avg+m/marks.length,0)
console.log(average)


//even number array from scores
let evenscores=[]
let scores=[12,13,14,15,16]
for(let i=0;i<scores.length;i++){

    if(scores[i]%2==0){
        evenscores.push(scores[i])
    }
}
console.log(evenscores)

//even number array using filter method

let newfilterevenscores=scores.filter(s=>s%2==0)//s represents each element of scores array
console.log(newfilterevenscores)

//map an array 
let mappedarray=newfilterevenscores.map(s=>s*3)
console.log(mappedarray)
let totalval=mappedarray.reduce((sum,val)=>sum+val,0)
console.log(totalval)

//filter,map and reduce using together
let sumvalue=scores.filter(s=>s%2==0).map(s=>s*3).reduce((sum,val)=>sum+val,0)
console.log(sumvalue)

//string array

let fruits=["Banana","Mango","Guava","Apple","Grapes"]
console.log(fruits.sort()) //ascending order sorting 
console.log(fruits.reverse()) //descending order sorting

//numeric array
var scores1=[12,3,19,16,14]
//console.log(scores1.sort())
console.log(scores1.sort((a,b)=>a-b))//numeric array ascending order sorting
console.log(scores1.sort((a,b)=>b-a))//numeric array descending order sorting
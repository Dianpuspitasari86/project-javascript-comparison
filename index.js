const nameA = 'Dian'
const nameB = 'Puspita'
const nameCompared = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)

const ageA = 33
const ageB = 30

if(ageA > ageB){
    console.log('im older than you')
}
else if(ageA < ageB){
    console.log('your my brother')
}
else {
    console.log('we are the same')
}

const personA = {
name: 'Dian',
age: 33
}

const personB = {
name: 'Itang',
age: 25
}

switch (personA.age > personB.age) {
case true:
    console.log('your my little brother')
    break

case false:
    console.log('your my big brother')
    break

default:
    console.log('we are equal')
}

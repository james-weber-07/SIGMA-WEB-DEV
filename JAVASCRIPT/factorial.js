let a=10 
let arr=[]
for (let i = 1; i <(a+1); i++) {
      arr.push(i)
}
function mult(a,b){
      return a*b
}
console.log(arr.reduce(mult))
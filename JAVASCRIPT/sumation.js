x=12
arr=[]
for(let i=1;i<=x;i++){
       arr.push(i)
}
sum=arr.reduce((a,b)=>{
      return a+b
})
console.log(sum)

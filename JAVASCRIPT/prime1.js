x=1
let a=[]
for(let i=1;i<=x;i++){
      if(x%i==0){
            a.push(i)
      }
}
if(a.length==2){
      console.log("prime")
}
else{
      console.log("not prime")
}

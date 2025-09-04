

function func(c){
      console.log("hi");
      c("hello");
}
function call(a){
      console.log(a);
}
setTimeout(()=>func(call),3000)

// new Promise((resolve,reject)=>{
//       x=Math.random()
//       if(x>0){
//             resolve("its greater")
//       }
// }).then((a)=>{
//       console.log(a)
//       return ;
// }).then((e=>{
//       console.log(e)
// }))



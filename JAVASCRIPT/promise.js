

// function func(data){
//      return new Promise((resolve,reject)=>
//      {
//       setTimeout(()=>{
//             let x=Math.random()
//             if(x>0.5){console.log(data)
//             resolve("userid found",data)}
//       else{
//             reject("sorry invalid userid")
//       }
            
//       },3000)

//      } )
// }

// func(1).then((res)=>{
//         console.log(res)
//         return func(2)
// }).then((e)=>{
//       console.log(e)
// }).catch((e)=>{
//       console.log(e)
// })

// func(1).catch((rej)=>{
//         console.log(rej)
//         return func(2)
// }).then((e)=>{
//       console.log(e)
// }).catch((r)=>{
//       console.log(r)
// })

function func(x){
      
      if(x>0.6){
            return true;
      }
      else {
            return false;
      }
}
async function getdata(id){
      return new Promise((resolve,reject)=>{
            let x=Math.random()
            console.log(x)
            setTimeout(()=>{if(func(x)){
                  console.log(id+" DATA IS FOUND")
                  resolve(200)
            }
            else{
                  console.log(id+" DATA IS NOT FOUND")
                  reject(400)
            }},2000)
      })
}
(async function(){
      await getdata("first")
      await getdata("second")
      await getdata("thrid")
      await getdata("fourth")
})();
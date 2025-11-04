const fs=require("fs")
fs.writeFile("jayant.txt","i am a good boy",()=>{
      console.log("i have been created")
})

fs.appendFile("jayant.txt"," i am also bad when someone try to mess with me",(e)=>{
      console.log(e)
})
fs.readFile("jayant.txt",(error,data)=>{
      console.log(data.toString())
})
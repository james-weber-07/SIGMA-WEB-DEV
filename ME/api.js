async function  getdata(){
      document.querySelector(".joke").innerHTML=""
      let URL="https://sv443.net/jokeapi/v2/joke/Any"
      let res= await fetch(URL)
      let data= await res.json()
      console.log(data)
      let x=data.type
      console.log(x)
      if(x=="twopart"){
             document.querySelector(".joke").insertAdjacentHTML("beforeend",`<p>${data.setup}</p>
            <p>${data.delivery}</p>`)
      }
      else{
            document.querySelector(".joke").insertAdjacentHTML("beforeend",`<p>${data.joke}</p>`)
      }
     
}
document.getElementById("btn").addEventListener("click",getdata)
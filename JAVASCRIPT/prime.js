let arr=[];
function check() {
      
      x = document.getElementById("num").value
      for(let i = 1; i<=x; i++) {
            if (x % i == 0) {
                  arr.push(i);
            }
      }
      if(arr.length==2){
            y=document.createElement("p")
            y.id="para"
            document.getElementById("btn").before(y)
            y.innerHTML=`${x} IS A PRIME NUMBER` 
      }
      else{
            y=document.createElement("p")
            y.id="para"
            document.getElementById("btn").before(y)
            y.innerHTML=`${x} IS NOT A PRIME NUMBER`
      }
      arr.length=0;
}
document.getElementById("btn").addEventListener("click",check)

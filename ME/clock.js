secondhand=document.getElementById("sec")
function move(){
      for(let i=1;i<60;i++){
            setTimeout(()=>{
                  let x=6*i;
                  secondhand.style.transform=`rotateZ(${x}deg)`;
            },i*1000)
      }
}

// move();
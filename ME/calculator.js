function num(x) {
      document.getElementById("screen1").insertAdjacentHTML("beforeend",`${x}`)
}
function submit() {
      y = document.getElementById("screen1")
      z = eval(y.innerText)
      document.getElementById("screen1").innerHTML = `${z}`
}
function clr(){
      document.getElementById("screen1").innerText=""
}


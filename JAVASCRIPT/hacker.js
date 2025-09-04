async function hack(num) {
      return new Promise((resolve, reject) => {
            var x=Math.ceil(0+Math.random()*7000)
            setTimeout(() => {
                  if (num==1) {
                        document.getElementById("content").insertAdjacentHTML("beforeend","<p>Intialising Hacking...</p>")
                        resolve(200)
                  }
                  else if (num==2) {
                        document.getElementById("content").insertAdjacentHTML("beforeend","<p>Reading your files...</p>")
                        resolve(200)
                  }
                  else if (num==3) {
                        document.getElementById("content").insertAdjacentHTML("beforeend","<p>Password files detected...</p>")
                        resolve(200)
                  }
                  else if (num==4) {
                        document.getElementById("content").insertAdjacentHTML("beforeend","<p>Sending all password files and personal files to the server...</p>")
                        resolve(200)
                  }
                  else if (num==5) {
                        document.getElementById("content").insertAdjacentHTML("beforeend","<p>cleaning up...</p>")
                        resolve(200)
                  }
            },`${x}`)
            x=0
      })
}

(async function ()  {
      await hack(1);
      await hack(2);
      await hack(3);
      await hack(4);
      await hack(5);
})();
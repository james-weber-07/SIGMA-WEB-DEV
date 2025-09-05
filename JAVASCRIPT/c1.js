function getuser(id) {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  if (id > 0) {
                        let user = {
                              uid: id,
                              name: "user" + id
                        }
                        resolve(user)
                  }
                  else {
                        reject(400)
                  }
            }, 1000)
      }
      )
}
function getpost(userid) {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  if (userid > 0) {
                        let arr = ["POST 1 BY USER " + userid, "POST 2 BY USER " + userid]
                        resolve(arr)
                  }
                  else {
                        reject(400)
                  }
            }, 2000)
      }
      )
}
async function showusersposts(id) {
      try {
            x = await getuser(id)
            console.log(x)
      }
      catch {
            console.log("SORRY NO USER FOUND")
      }
      try {
            y = await getpost(id)
            console.log(y)
      }
      catch {
            console.log("SORRY NO USER POSTS FOUND")
      }

}
showusersposts(123456)


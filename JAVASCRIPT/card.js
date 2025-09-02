
function createcard(title, cname, views, months, thumbnail) {
      y=document.createElement("div")
      y.setAttribute("class","card")
      // y.setAttribute("id","idcard")
      document.getElementById("but").before(y)
      y.insertAdjacentHTML("afterbegin",
       `<div class="image"><img class="thumb" src="${thumbnail}" alt=""></div>
            <div class="content">
                  <h2 class="title">${title}</h2>
                  <div class="info">
                        <div class="cname">${cname}</div>
                        <div class="views">${views}</div>
                        <div class="months">${months}</div>
                  </div>
            </div>`
      );
      
}
function create() {
       x=document.createElement("form")
       document.getElementById("but").before(x)
       x.id="myform"
       x.insertAdjacentHTML("afterbegin",
      `Title : <input type="text"  class="a1" id="title">
            Channel Name : <input type="text"  class="a1"name="" id="cname">
            Views : <input type="text" class="a1" id="views">
            Months old : <input type="text" class="a1" id="months">
            Thumbnail Image src : <input type="text" class="a1"id="url"></input>
           <button type="button" class="b1" onclick="done()">CREATE</button>
            `)
       
}
function done(){
      
      let title1=document.getElementById("title").value
      let cname1=document.getElementById("cname").value
      let views1=document.getElementById("views").value
      let months1=document.getElementById("months").value
      let imgsrc=document.getElementById("url").value
      createcard(title1, cname1, views1, months1,imgsrc)
      document.getElementById("myform").remove()
}
x = document.getElementById("but")
document.body.appendChild(x)

createcard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "Code With Harry", "161k views", "2 months old", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ")


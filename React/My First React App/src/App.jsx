import Navbar from "./components/Navbar"
import { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [cards, setcards] = useState([])
  useEffect(() => {
    async function api(){
  const datas=await fetch("https://jsonplaceholder.typicode.com/posts");
 const data= await datas.json();
  setcards(data)
    }
    api();
  }, [])

  return (
    <>
     <Navbar/>
    <div className="container">
     
      {cards.map(x=>{
        return(
          <div className="card" key={x.id}>
            <div className="title">Title:-{x.title}</div> 
            <div className="content">Content:-{x.body}</div>
          </div>
        )
        })}
    </div>
    </>
  )

}

export default App
